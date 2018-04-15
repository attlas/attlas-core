
export class NavAction {
  initAction(action: any, icon: string = '', text: string = '') {
    this.visible = true;
    this.action = action;
    this.icon = icon;
    this.text = text;
  }

  isVisible(): boolean { return this.visible; }
  callAction() { this.action(); }
  getIcon(path: string): string {
    if (this.icon ) {
      return path + `/${this.icon}.png`;
    }
    return '';
  }
  getText(): string { return this.text; }
  /**/
  private visible: boolean = false;
  private action: any = null;
  private icon = '';
  private text = '';
}

export class NavButton extends NavAction{
  initButton(color: string, border: string) {
    let cl = `btn btn-${color}`;
    if (typeof border != 'undefined') {
      cl = `${cl} border`;
      if (border != ''){
        cl = `${cl} border-${border}`;
      }
    }
    this.buttonClasses = cl;
  }
  build(offset:number, width: number, size: string) {
    this.buttonClasses = `${this.buttonClasses} btn-${size}`;
    this.rowClasses = `offset-${offset} col-${width}`;
  }
  getButtonClasses(): string { return this.buttonClasses; }
  getRowClasses(): string { return this.rowClasses; }
  private buttonClasses: string = '';
  private rowClasses: string = '';
}

export class NavAdvancedButton extends NavButton {
  items: NavAction[] = [];
  initPopup(color: string) {
    this.popupClasses = `bg-${color}`;
  }
  getPopupClasses(): string { return this.popupClasses; }
  private popupClasses: string = '';
}

export class NavButtons {
  primary: NavButton = new NavButton();
  secondary: NavButton = new NavButton();
  advanced: NavAdvancedButton = new NavAdvancedButton();
  /**/
  build(offset: boolean, size: string) {
    let w1 = 0;
    let w2 = 12;
    let o1 = 0;
    let o2 = 0;
    let o3 = 0;
    //
    if (offset) {
      w2 = 10;
      o3 = 1;
    }
    if (this.advanced.isVisible()) {
      w1 = 2;
      w2 = w2 - w1;
    }
    if (this.primary.isVisible() && this.secondary.isVisible()) {
      w2 = w2 / 2;
    }
    this.primary.build(o3, w2, size);
    this.secondary.build(o2, w2, size);
    this.advanced.build(o1, w1, size);
  }
}
