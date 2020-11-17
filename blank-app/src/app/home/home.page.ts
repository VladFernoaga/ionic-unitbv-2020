import { Component } from "@angular/core";
import { AppStorage } from "../service/storage.service";
import { User } from "../model/User";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public storage: AppStorage) {}

  addUser(): void {
    this.storage.loggedUser = new User("", "");
  }
}
