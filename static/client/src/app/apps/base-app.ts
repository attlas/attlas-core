export class BaseApp {

  public toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
  public isCollapsed(): boolean {
    return this.collapsed;
  }

  private collapsed: boolean = false;
}
