import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies =  {};
  constructor(private _movieService : MovieService,private router: Router) { }

  ngOnInit() {
    this._movieService.getMovies().subscribe(data => this.movies = data);
  }
  toSearch(movieName){
    this.router.navigate(['./search',{name:movieName}]);
  }
  goToMovie(movieId){
    this.router.navigate(['./movie',{id:movieId}]);
  }

}
