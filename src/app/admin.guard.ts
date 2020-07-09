import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'; // es un observable


import { AuthService } from './core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(  // 1
      map(user => user === null ? false : true),
      tap(hasUser => {
        if (!hasUser) {
          this.router.navigate(['/auth/login']);
        }
      }),
    );
  }

}
/* aquí deberiamos importar nuestro servicio de importación y validarlo con un true or false, si me retorna
 un true puedo acceder a la ruta, si es false, no
 el guardian lo añado en el acceso a las rutas en el routing-module para que tenga que validarlo para
 ingresar*/

 /* adevuelvame el observable de si tengo un usuario, le pongo un pipe y le digo el valor del usuario por
 favor transformelo
 utilizo el map y le digo si tiene un usuario => entonces si el usuario
 si el ususario es === a null devuelva ? un false
 si no :  un true
 con esto puedo validar que el usuario este autentificado */
