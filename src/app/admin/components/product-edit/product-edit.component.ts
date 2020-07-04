import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
// el FormGroup es para maneajar lso datos del formulario como grupo
// FormBuilder es una extensiómn de angular que nos permite crear el grupo rapidamente
import { ProductsService } from './../../../core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor( // formbuilder es una inyeccion
    private formbuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute // el ActivatedRoute es para capturar el id
  ) {
    this.buildForm();
   }

  ngOnInit() { // capturo el id
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id) // capturo el producto por el id
      .subscribe(product => {
        this.form.patchValue(product); // para rellenar el form con los datos que traiga
      });
    });
  }

  saveProduct(event: Event) {
    event.preventDefault(); // quitamos la accion por defecto del formulario
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
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
