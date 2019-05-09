import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flex';
  themes = {
    "brown" : true,
    "grey"  : false

  }

  panelExpanded : boolean = true

  SetTheme(theme : string) {
    let props : Array<string> = Object.getOwnPropertyNames(this.themes);
    props.forEach(element => {
      this.themes[element] = false;
    });

    this.themes[theme] = true;

  }

  ChangeExpandedPanel() {
    this.panelExpanded = !this.panelExpanded;
  }

  GetLitleButtonsLayout() : string {
    if(this.panelExpanded) {
      return "row";
    }
    else {
      return "column";
    }
  }

  GetPanelFlexOption() {
    if(this.panelExpanded) {
      return "1 0 20%";
    }
    else {
      return "1 0 5%";
    }
  }

  GetBodyFlexOption() {
    if(this.panelExpanded) {
      return "1 0 80%";
    }
    else {
      return "1 0 95%";
    }
  }

  GetFooterFlexOption() {
    if(this.panelExpanded) {
      return "1 0 ";
    }
    else {
      return "5 0 ";
    }
  }


}
