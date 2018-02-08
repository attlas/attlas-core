import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { MatchResult } from '../utils/match-result'
import { MatchParam } from '../utils/match-param'
import { ProgressService } from '../services/progress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  matchResult: MatchResult = new MatchResult();

  mode: number = 0;
  model: any = {};
  matching: boolean = false;
  cleverstaffVacancies = [];
  cleverstaffMatches = [];

  constructor(private http: HttpClient, private progressService: ProgressService) {
    this.model.interviewer = "c++ boost";
    this.model.interviewee = "java sql tomcat";
  }

  ngOnInit() {
  }
  /**
   *
   */
  changeMode(mode: number){
    this.mode = mode;
    this.reset();
  }
  /**
   *
   */
  getApiEndpoint(path: string): string {
    return environment.backendApiUrl + path;
  }
  /**
   *
   */
  reset() {
    this.matchResult.reset();
    this.progressService.reset();
  }
  /**
   *
   */
  match(){
    this.reset();
    this.matching = true;
    let interviewer = this.model.interviewer.replace(/\n/g, " ");
    let interviewee = this.model.interviewee.replace(/\n/g, " ");
    if (this.mode == 0){
      this.progressService.init(0, 1, 2);
      this.matchStreams(interviewer, interviewee, this.matchMode0, undefined);
    } else {
      this.cleverstaffMatches = [];
      if (this.cleverstaffVacancies.length) {
        this.progressService.init(0, 0, this.cleverstaffVacancies.length);
        this.matchCleverStaff(interviewee);
      } else {
        this.progressService.init(0, 1, 20);
        this.http.get(this.getApiEndpoint('/docs'))
          .subscribe(
            data => {
              this.cleverstaffVacancies =  data['data'][0];
              this.matchCleverStaff(interviewee);
            },
            err => {
              this.finalize("Backend communication error");
            }
          );
      }
    }
  }
  matchCleverStaff(interviewee: string) {
    this.progressService.init(0, 1, this.cleverstaffVacancies.length+1);
    let param: MatchParam = new MatchParam();
    param.stream = interviewee;
    if (this.cleverstaffVacancies.length) {
      this.matchStreams(this.cleverstaffVacancies[param.index]['descr'], interviewee, this.matchMode1, param);
    } else {
      this.finalize();
    }
  }

  finalize(errorText:string = ""){
    this.matchResult.error = errorText;
    this.matching = false;
    this.progressService.finalize();
  }
  /**
   *
   */
  matchStreams(lStream: string, rStream: string, callback, param: MatchParam) {
    this.http.post(this.getApiEndpoint('/goals'), { flowId:'flows/matchit/match', parameters: { streams: [lStream, rStream]}})
      .subscribe(
        data => {
          let r = new MatchResult();
          r.value = Math.round(data["data"][0]["value"] * 1000) / 10;
          r.lTags = data["data"][0]["foundTags"][0];
          r.rTags = data["data"][0]["foundTags"][1];
          r.iTags = data["data"][0]["intersection"];
          callback.bind(this)(r, param);
        },
        err => {
          let r = new MatchResult();
          r.error = "Backend communication error";
          callback.bind(this)(r, param);
        }
      );
  }

  showMatchResult(result: MatchResult){
    this.matchResult = result.clone();
  }

  matchMode0(result: MatchResult, param: MatchParam){
    this.finalize();
    this.matchResult = result;
    //console.log(this.matchResult);
  }

  matchMode1(result: MatchResult, param: MatchParam){
    if (result.isOk()){
      this.progressService.inc();
      // insert new record, if it's better
      let i: number = 0;
      let add: boolean = true;
      for (let match of this.cleverstaffMatches) {
        //console.log(result.value, match.matchResult.value);
        if (result.value > match.matchResult.value){
          let r: MatchResult = new MatchResult();
          r = result;
          this.cleverstaffMatches.splice(i, 0, {title: this.cleverstaffVacancies[param.index]['title'], matchResult: r});
          add = false;
          break;
        }
        i++;
      }
      if (add) {
        this.cleverstaffMatches.push({title: this.cleverstaffVacancies[param.index]['title'], matchResult: result});
      }
      // show 5 best matches only
      this.cleverstaffMatches = this.cleverstaffMatches.slice(0, 5);
      
      // check next item in vacancies
      param.index++;
      if (param.index < this.cleverstaffVacancies.length){
        this.matchStreams(this.cleverstaffVacancies[param.index]['descr'], param.stream, this.matchMode1, param);
      } else {
        this.finalize();
      }
    } else {
      this.finalize();
      this.matchResult = result;
    }
  }

}
