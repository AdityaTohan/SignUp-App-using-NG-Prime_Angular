import { Component } from '@angular/core';
import {Router} from "@angular/router";

export let count=50;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primesign_in';

  constructor(
    private router:Router,
  ){}

  scaleUp() {
    count++

  }

  scaleDown(){
    count--
  }

  returnCount(){
    // this.router.navigate(['signup'])
    return count;

  }
}
