import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./api.model";

@Injectable()
export class ApiConnectorService {
  constructor(private http: HttpClient) {}

  private readonly URL = "http://localhost:3002";

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}/product`);
  }
}
