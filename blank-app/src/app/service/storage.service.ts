import { Injectable } from "@angular/core";
import { User } from '../model/User';

@Injectable()
export class AppStorage {
  loggedUser = new User('Vlad',undefined); { name: "Vlad" };
}
