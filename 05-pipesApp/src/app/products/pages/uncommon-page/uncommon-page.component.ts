import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Jane';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  changeClient() {
    this.name = "John";
    this.gender = 'male';
  }
}
