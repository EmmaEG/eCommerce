import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
/* aquí deberiamos importar nuestro servicio de importación y validarlo con un true or false, si me retorna
 un true puedo acceder a la ruta, si es false, no
 el guardian lo añado en el acceso a las rutas en el routing-module para que tenga que validarlo para
 ingresar*/
