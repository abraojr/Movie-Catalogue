import { Alert } from './../../models/alert';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dio-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alert = {
    title: "Success",
    description: "Your registration was successful!",
    btnSuccess: "OK",
    btnCancel: "Cancel",
    btnSuccessColor: "accent",
    btnCancelColor: "warn",
    hasBtnClose: false
  } as Alert

  constructor(public dialogRef: MatDialogRef<AlertComponent>, @Inject(MAT_DIALOG_DATA) public data: Alert) {

  }

  ngOnInit(): void {
    if (this.data) {
      this.alert.title = this.data.title || this.alert.title;
      this.alert.description = this.data.description || this.alert.description;
      this.alert.btnSuccess = this.data.btnSuccess || this.alert.btnSuccess;
      this.alert.btnCancel = this.data.btnCancel || this.alert.btnCancel;
      this.alert.btnSuccessColor = this.data.btnSuccessColor || this.alert.btnSuccessColor;
      this.alert.btnCancelColor = this.data.btnCancelColor || this.alert.btnCancelColor;
      this.alert.hasBtnClose = this.data.hasBtnClose || this.alert.hasBtnClose;
    }
  }
}
