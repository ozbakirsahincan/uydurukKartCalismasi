import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() title: string = '';
  @Input() userName: string = '';
  @Input() imageUrl: string = '';
  @Input() content: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
