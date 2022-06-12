import { Component } from '@angular/core';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sistema';

  titlesApp = ['App1.0', 'App2.0', 'App3.0', 'App4.0', 'App5.0'];

  selectedApp = 'None';

  selectApp(appName: string) {
    this.selectedApp = appName;
    //console.log('App selected', appName);
  }

  /*  titleApp01 = 'App1.0';
  titleApp02 = 'App2.0';
  titleApp03 = 'App3.0';
  titleApp04 = 'App4.0';
  titleApp05 = 'App5.0'; */
}
