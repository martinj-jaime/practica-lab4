import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
class AuthService {
  private readonly baseUrl: string = 'https://utn-lubnan-api-2.herokuapp.com'
  private readonly userUrl: string = `${this.baseUrl}/api/User`
  user: User | null = null
  // private readonly userTypeUrl: string = `${this.baseUrl}/api/UserType`

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  get currentUser(): User | null {
    return this.user
  }

  isAuth(): Observable<boolean> {
    return of(Boolean(this.currentUser))
  }

  setSession(user: User) {
    this.user = user
  }

  apiGetUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }

  async apiLoginUser(payload: Object): Promise<User | undefined | Error> {
    try {      
      const res: User | undefined = await this.http.post<User>(`${this.userUrl}/Login`, payload).toPromise()
      if(res !== undefined) {
        this.user = res
        this.router.navigate([''])
        return res
      } 
      throw new Error("Email o contraseña incorrecta")
    } catch(err) {
      throw new Error("Email o contraseña incorrecta")
    }
  }

  logoutUser() {
    this.user = null
    this.router.navigate(['/login'])
  }
}

export default AuthService
