import { Component } from '@angular/core';

/**
 * Generated class for the JiajuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jiaju',
  templateUrl: 'jiaju.html'
})
export class JiajuComponent {

  text: string;

  constructor() {
    console.log('Hello JiajuComponent Component');
    this.text = 'Hello World';
  }

}
