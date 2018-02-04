export class MatchResult {
  value: number;
  lTags: string[];
  rTags: string[];
  iTags: string[];
  error: string;

  //
  constructor() {
    this.reset();
  }
  //
  reset(){
    this.value = -1;
    this.lTags = [];
    this.rTags = [];
    this.iTags = [];
    this.error = "";
  }
  //
  isOk(): boolean {
    return (this.value >= 0);
  }
  // 
  clone(): MatchResult {
    let r: MatchResult = new MatchResult();
    r.value = this.value;
    r.lTags = this.lTags;
    r.rTags = this.rTags;
    r.iTags = this.iTags;
    r.error = this.error;
    return r;
  }

}
