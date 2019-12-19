import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title: string = 'My Favorite Links';
  favLinks: string[] = ['https://stackoverflow.com/', 'https://launchcode.org'];
  constructor() { }

  ngOnInit() {
  }

}
