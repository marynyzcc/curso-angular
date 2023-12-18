import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  deleteClient() {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Jane',
    age: 36,
    address: 'Ottawa, Canada'
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap: ',value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre'
    }, 3500);
  });
}
