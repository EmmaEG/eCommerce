import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// el FormGroup es para maneajar lso datos del formulario como grupo
// FormBuilder es una extensiómn de angular que nos permite crear el grupo rapidamente
import { ProductsService } from './../../../core/services/products/products.service';
import { finalize } from 'rxjs/operators';
import { MyValidators } from 'src/app/utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>; // 7 cuando es un observable hay que colocar un signo pesos

  constructor( // formbuilder es una inyeccion
    private formbuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage

  ) {
    this.buildForm();
   }

  ngOnInit() {
  }

  saveProduct(event: Event) {
    event.preventDefault(); // quitamos la accion por defecto del formulario
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.CreateProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  uploadFile(event) { // recibe un evento
    const file = event.target.files[0]; // 1
    const name = 'image'; // 2
    const fileRef = this.storage.ref(name); // 3
    const task = this.storage.upload(name, file); // 4

    task.snapshotChanges() // 5
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL(); // 8
        this.image$.subscribe(url => {  // 9
          console.log(url);
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe(); // 6 
  }

  // vmos a crear un metodo que sea privado,
  private buildForm() {
    this.form = this.formbuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''], // 9.1 para guardar ese nombre en la base de datos
      description: ['', [Validators.required]],
    });
  }

  get priceField() { // uso get como una variable para llamar a price
    return this.form.get('price');
  }

}

/* esta vez llamamos al metodo en el constructor porque no estamos llamando datos sino estamos haciendo
una construccion */

/*
1 event.target nos devuelve el elemento input, que recibimos en un array y como nosotros estamos adjun
tando un solo archivo le pedimos el elemento numero 1 o sea el elemento 0 del array

2 le indico el directorio donde voy a subir la imagen

3 le indico que referencia tiene ese archivi y aquí empiezo a utilizar el storage

4 creamos una tarea, que es la tarea de subrila, y le decimos que por favor suba un archivos en este carpeta
(name)
y le mandamos el archivo a subir (file), esta tarea es un observable.

5 para hacer esto debemos hacer referencia a task.snapshotchanges lo cual nos va a permitir saber cuando
finaliza o cuando no, esto nos devuelve un observable y como es un observable lo puedo procesar con un pipe
solo para que me notifique cuando finaliza (importamos el pipe filaze) entonces le decimos que me notifique
cuando haga todo el proceso y automaticamente vamos a tener de filRef la url que al final vamos a poder 
utilizar

6 y finalmente tengo que hacer una subscripcion para que todo se procese.

7 cuando finalice entonces voy a obtener la url, pero yo la voy a meter en alguna variable para mostrarla
en pantalla

8 y entonces la voy a decir que asigne a image esta imagen

9 cuando tenga la respuesta voy a asignarle a la image la url del archivo que subo a la base de datos para que
quede con esa referencia en la base de datos en el 9.1
entonces vamos a image, tambien nos subscribimos para cuando finalice, obtengo la url y finalmente esa url
se la asigno a nuestro formulario al campo de image (con get obtengo el campo image) le seteo el valor con 
setValue y este valor será la url que vamos a subir como tal
*/
