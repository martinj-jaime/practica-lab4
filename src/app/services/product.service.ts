import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl: string = 'https://utn-lubnan-api-2.herokuapp.com'
  private readonly url: string = `${this.baseUrl}/api/Product`

  // https://utn-lubnan-api-2.herokuapp.com/index.html

  constructor(private http: HttpClient) { }

  // pipe = operador de programacion reactiva (RxJS)
  // funcion que permite encadenar una serie de operadores
  // para transformar, manipular o editar datos
  // que fluyen en un flujo de observables

  apiGetProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)

    // si quiero manejar errores uso pipe
    // ejemplo
    /* 
    .pipe(
      catchError((error) => {
        console.error("Ha ocurrido un error en la solicitud HTTP: ", error)
        return throwError(() => error)
      })
    )
    */
  }

  apiGetProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${productId}`)
  }

  apiDeleteProduct(productId: number): Promise<any> {
    // console.log("apiDeleteProduct", `${this.url}/${productId}`)
    return this.http.delete(`${this.url}/${productId}`, {
      headers: {
        "accept": "*"
      }
    }).toPromise()
  }

  apiUpdateProduct(payload: Object): Promise<any> {
    return this.http.put(this.url, payload).toPromise()
  }

  apiAddProduct(payload: Object): Promise<any> {
    return this.http.post(this.url, payload).toPromise()
  }






}
