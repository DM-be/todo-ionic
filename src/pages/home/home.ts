import { Todo } from '../../model/todo';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddItemPage } from '../add-item/add-item';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    
    addModal.onDidDismiss((todo) => {
        if(todo)
        {
          this.todos.push(todo)
        }
    });

    addModal.present();

  }

  viewItem(todo) {

  }

 





}
