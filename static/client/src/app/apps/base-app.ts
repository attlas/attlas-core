export class BaseApp {

  private collapsed = false;

  public toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
  public isCollapsed(): boolean {
    return this.collapsed;
  }
}
