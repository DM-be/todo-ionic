import { Todo } from '../../model/todo';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  description: string;



  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad AddItemPage');
  }

  saveItem() {
    let newTodo = new Todo(this.title, this.description);
    this.view.dismiss(newTodo);

  }

  close() {
    this.view.dismiss();

  }

}
