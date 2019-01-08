import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  result: string;

  onScannerValue(eventValue){
    this.result = eventValue;
    alert('Checking:' + eventValue);
  }

}
