import { Component } from "@angular/core";
import { ApiConnectorService } from "../api-service/api-connector.service";
import { Product } from "../api-service/api.model";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(private apiConnector: ApiConnectorService) {}

  products: Product[];

  getProducts() {
    this.apiConnector.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
