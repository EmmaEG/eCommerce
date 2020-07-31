import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { ContactDbService } from './../../../core/services/contact/contact-db.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  status: string;
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactDbService: ContactDbService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.buildForm(); // llamamos al metodo aquí dado que es una construccion
   }

  ngOnInit() {
    // es bueno para llamar datos
  }

  private buildForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  SendForm(event: Event) {
    event.preventDefault();
    if (this.contactForm.valid){
    this.contactDbService.saveMessage(this.contactForm.value);
    this.contactForm.reset();
    this.toastr.success('su mensaje ha sido enviado');
    this.contactForm.get('name').setErrors(null);
    this.contactForm.get('email').setErrors(null);
    this.contactForm.get('message').setErrors(null);
    setTimeout(() => {
      this.router.navigate(['./home']);
     }, 3000);
    }
  }

}
