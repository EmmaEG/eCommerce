import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // reenderizamos el layout para poder tenerlo en todas las url
    children: [ // el layout tiene hijos, cadena de rutas que lo tendran
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        // component: HomeComponent ahora que ya no es un componente debemos cargar el modulo
      },
      {
        path: 'products',
        canActivate: [AdminGuard], // guardian de ruta
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard], // guardian de ruta
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { // el error siempre debe estar cargado al final xq sino no encuentra las rutas
    path: '**', // no hay match, no existe la ruta
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules // estrategia de pre-carga para agilizar la carga de modulos en redes lentas
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
