import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/Personaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() personaje: Personaje | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
