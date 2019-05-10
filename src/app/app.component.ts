import { Component,  AfterViewInit } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'flex';
  themes = {
    "brown" : true,
    "grey"  : false

  }

  panelExpanded : boolean = false

  ngAfterViewInit() {
    setTimeout(() => {
      this.panelExpanded = true;
    }, 10);
  }



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
      return "row wrap";
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


  Test(message) {
    console.log(message);
  }
}
