import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isOpen: boolean = false;
  imageMoney: string = '';
  listImage: string[] = ['1', '2', '5', '10'];
  ngOnInit(): void {

    this.imageMoney = `assets/img/money-${this.listImage[Math.floor(Math.random() * 4)]}.png`;
  }
}
