import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "dio-register-movies",
  templateUrl: "./register-movies.component.html",
  styleUrls: ["./register-movies.component.scss"]
})
export class RegisterMoviesComponent implements OnInit {

  options: FormGroup;

  constructor(private fb: FormBuilder) {
  };

  ngOnInit() {
    this.options = this.fb.group({
      hideRequired: false,
      floatLabel: "auto",
    });
  };
};
