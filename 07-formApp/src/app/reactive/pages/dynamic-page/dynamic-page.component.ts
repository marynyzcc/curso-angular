import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favouriteGames: this.fb.array([
      ['Mario Bros', Validators.required],
      ['Pokemon', Validators.required]
    ]),

  });

  constructor(private fb: FormBuilder) {}

  get favouriteGames() {
    return this.myForm.get('favouriteGames') as FormArray;
  }

  onSubmit() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
