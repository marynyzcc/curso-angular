import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'jane';
  public nameUpper: string = 'JANE';
  public fullName: string = 'JaNE DoE';

  public customDate: Date = new Date();
}
