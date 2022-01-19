import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['', 'Project Manager','Developer', 'Entrepreneur'],
      typeSpeed: 250,
      backSpeed: 190,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

}
