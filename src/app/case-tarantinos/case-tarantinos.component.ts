import { Component, OnInit, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-case-tarantinos',
  templateUrl: './case-tarantinos.component.html',
  styleUrls: ['./case-tarantinos.component.css']
})
export class CaseTarantinosComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Case Tarantino`s');
  }

}
