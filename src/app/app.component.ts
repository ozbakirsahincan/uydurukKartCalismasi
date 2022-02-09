import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title:'Dag Tas',
      userName:'sahincan',
      imageUrl:'assets/mountain.jpeg',
      content : 'Yanlız iyi tırmandık ha ...'
    },
    { 
      title:'Bisikletli',
      userName:'denizbilenozbakir',
      imageUrl:'assets/biking.jpeg',
      content : 'Biking ...'
    },
    {
      title:'Hani Kuşlar Ağaçlar',
      userName:'cookie',
      imageUrl:'assets/tree.jpeg',
      content : 'Hav hav hav ...'
    },
    {
      title:'Agu',
      userName:'laçin',
      imageUrl:'assets/mountain.jpeg',
      content : 'ıngağ  ...'
    },
  ]
}
