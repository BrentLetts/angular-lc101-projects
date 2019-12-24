import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string){
      let errorMessage = '';
      if(this.movies.includes(newTitle)){
         errorMessage = `${newTitle} is already in the list`;
      }else if(newTitle === ""){
         errorMessage = "Please enter a title";
      }else{
         this.movies.push(newTitle);
      }
      return errorMessage;
   }

   removeFromList(title: string){
      let movieIndex = this.movies.indexOf(title);
      let array = this.movies;
      this.movies.splice(movieIndex);
   }
}