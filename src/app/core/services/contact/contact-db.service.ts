import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from './../../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactDbService {

  private contactCollection: AngularFirestoreCollection<Contact>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.contactCollection = afs.collection<Contact>('contact');
    // ('contact') le indicamos el nombre de la coleccion con la que vamos a trabajar
  }

  saveMessage(newContact: Contact) {
    this.contactCollection.add(newContact);
  }
}
