import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidateFieldsService } from '../validate-fields.service';

@Component({
  selector: 'dio-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {


  @Input() title: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() min: 0;
  @Input() max: 10;
  @Input() step: 1;

  constructor(public validation: ValidateFieldsService) {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
