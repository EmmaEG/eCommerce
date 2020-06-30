// haremos la declaración de rutas
import { NgModule } from '@angular/core'; // para declararlo como un component o un modulo en si mismo
import { Routes, RouterModule } from '@angular/router'; // para la ruta

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}