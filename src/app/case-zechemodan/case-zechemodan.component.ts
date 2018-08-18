import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-case-zechemodan',
  templateUrl: './case-zechemodan.component.html',
  styleUrls: ['./case-zechemodan.component.css']
})
export class CaseZechemodanComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Case Zachemodan');
  }

}
