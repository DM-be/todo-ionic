import { Todo } from '../../model/todo';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddItemPage } from '../add-item/add-item';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ItemDetailPage } from '../item-detail/item-detail';
import { DataProvider } from '../../providers/data/data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {


    this.dataService.getData().then((todos) => {
      if(todos){
        this.todos = todos;
      }
    })
  }

  ionViewDidLoad() {
    
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    
    addModal.onDidDismiss((todo) => {
        if(todo)
        {
          this.saveTodo(todo);
        }
    });

    addModal.present();

  }

  saveTodo(todo)
  { 
    this.todos.push(todo);
    this.dataService.save(this.todos);

  }

  viewItem(todo) {
    this.navCtrl.push(ItemDetailPage, {
      todo
    })

  }

 





}
