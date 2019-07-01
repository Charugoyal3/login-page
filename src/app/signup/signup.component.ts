import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user: User;
  emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  User: {
    Username: string;
    Password: string;
    Email: string;
    Firstname: string;
    Lastname: string;
  };
  constructor() {}

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.User = {
      Username: "",
      Password: "",
      Email: "",
      Firstname: "",
      Lastname: ""
    };
  }
}
