import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';

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

  public newFavourite: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {}

  get favouriteGames() {
    return this.myForm.get('favouriteGames') as FormArray;
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors
        && formArray.controls[index].touched;
  }

  getFieldError(field: string): string | null {
    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }

    return null;
  }

  onAddToFavourites() {
    if(this.newFavourite.invalid) return;
    const newGame = this.newFavourite.value;

    this.favouriteGames.push(
      this.fb.control(newGame, Validators.required)
    );

    this.newFavourite.reset();
  }

  onDeleteFavourite(index: number) {
    this.favouriteGames.removeAt(index);
  }

  onSubmit() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    (this.myForm.controls['favouritesGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }
}
