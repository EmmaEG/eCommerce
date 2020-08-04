import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl; // aqui estoy tipando el campo pero no lo estoy construyendo

  constructor(
    private toastr: ToastrService
  ) { // la construimos aquí
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  /*
    this.emailField.valueChanges // cada vez que hay un cambio 
    .subscribe(value => { // me subscribo
      console.log(value);
    });*/
  }

  ngOnInit(): void {
  }

  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
    this.emailField.reset();
    this.toastr.success('gracias por suscribirte', 'Tú email se registró con éxito');
  }

}
