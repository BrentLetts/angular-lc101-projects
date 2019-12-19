import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  title: string = "Angular Lesson 1 Exercise";
  titleGif = 'https://media2.giphy.com/media/zOvBKUUEERdNm/giphy.webp?cid=790b7611d4c8e837665ed48ff457ed4a750bea3327edb1d4&rid=giphy.webp';
  constructor() { }

  ngOnInit() {
  }

}
