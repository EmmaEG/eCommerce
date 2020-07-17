import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ContactDbService } from './../../../core/services/contact/contact-db.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactDbService: ContactDbService
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
    this.contactForm.get('name').setErrors(null);
    this.contactForm.get('email').setErrors(null);
    this.contactForm.get('message').setErrors(null);
    }
  }

}
