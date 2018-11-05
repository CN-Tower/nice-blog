import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit, AfterViewInit {
  isShow: Boolean = false;
  validateForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email            : [ null, [ Validators.email, Validators.required ] ],
      oriPassword      : [ null ],
      password         : [ null ],
      checkPassword    : [ null, [ this.confirmationValidator ] ],
      nickname         : [ null, [ Validators.required ] ],
      phoneNumberPrefix: [ '+86' ],
      websetPrefix     : [ 'http://' ],
      phoneNumber      : [ null ],
      website          : [ null ],
      company          : [ null ],
      address          : [ null ],
      bio              : [ null ],
      captcha          : [ null, [ Validators.required ] ],
      agree            : [ false ]
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.isShow = true);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[ i ].markAsDirty();
        this.validateForm.controls[ i ].updateValueAndValidity();
      }
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  }
}
