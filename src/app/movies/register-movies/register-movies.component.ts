import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidateFieldsService } from "src/app/shared/component/fields/validate-fields.service";

@Component({
  selector: "dio-register-movies",
  templateUrl: "./register-movies.component.html",
  styleUrls: ["./register-movies.component.scss"]
})
export class RegisterMoviesComponent implements OnInit {

  register: FormGroup;

  constructor(public validation: ValidateFieldsService, private fb: FormBuilder) {
  }

  get f() {
    return this.register.controls;
  }

  ngOnInit(): void {
    this.register = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlImage: ["", [Validators.minLength(10)]],
      releaseDate: ["", [Validators.required]],
      description: [""],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: ["", [Validators.minLength(10)]],
      genre: ["", [Validators.required]]
    });
  }

  save(): void {
    this.register.markAllAsTouched();
    if (this.register.invalid) {
      return;
    }
    alert("SUCCESS!!\n\n" + JSON.stringify(this.register.value, null, 4));
  }

  resetForm(): void {
    this.register.reset();
  }
}
