import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppStorage } from "../service/storage.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
  constructor(private router: Router, public storage: AppStorage) {}

  ngOnInit() {}

  navBack($event: any): void {
    const areUnsavedChanges = false;
    if (!areUnsavedChanges) {
      this.router.navigate(["home"], {});
    } else {
      //show alert
    }
    // navigation back

    // this.router.navigateByUrl("/home", { skipLocationChange: true });
  }
}
