import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// el FormGroup es para maneajar lso datos del formulario como grupo
// FormBuilder es una extensiómn de angular que nos permite crear el grupo rapidamente
import { ProductsService } from './../../../core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor( // formbuilder es una inyeccion
    private formbuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
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

  // vmos a crear un metodo que sea privado,
  private buildForm() {
    this.form = this.formbuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField() { // uso get como una variable para llamar a price
    return this.form.get('price');
  }

}

/* esta vez llamamos al metodo en el constructor porque no estamos llamando datos sino estamos haciendo
una construccion */