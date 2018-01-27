import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  matching = false;
  error = "";
  value = -1;
  interviewerTags = [];
  intervieweeTags = [];
  intersectionTags = [];
  cleverstaffVacancies = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
/*
    this.http.get('http://46.101.7.84:8182/api/v1/docs')
      .subscribe(
        // Successful responses call the first callback.
        data => {
          this.cleverstaffVacancies = data['data'][0];
          console.log(this.cleverstaffVacancies)
        },
        // Errors will call this callback instead:
        err => {
        }
      );
*/
  }
  /**
   *
   */
  match(){
    this.matching = true;
    this.error = "";
    let interviewer = this.model.interviewer.replace(/\n/g, " ");
    let interviewee = this.model.interviewee.replace(/\n/g, " ");
    //
    //this.http.post('http://46.101.7.84:8182/api/v1/goals', JSON.stringify({ flowId:'flows/matchit/match', parameters: { streams: [interviewer, interviewee]}}))
    this.http.post('http://46.101.7.84:8182/api/v1/goals', { flowId:'flows/matchit/match', parameters: { streams: [interviewer, interviewee]}})
      .subscribe(
        // Successful responses call the first callback.
        data => {
          this.value = Math.round(data["data"][0]["value"] * 1000) / 10;
          this.interviewerTags = data["data"][0]["foundTags"][0]
          this.intervieweeTags = data["data"][0]["foundTags"][1]
          this.intersectionTags = data["data"][0]["intersection"]
          console.log(data)
          this.matching = false;
        },
        // Errors will call this callback instead:
        err => {
          this.error = "Backend service is unavailable";
          this.matching = false;
        }
      );
  }

}
