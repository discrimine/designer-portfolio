import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { element } from 'protractor';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}

  title = 'Портфоліо';

  custRout(event) {
    event.preventDefault();
    const path = event.target.parentElement.attributes['href'].value;
    this.router.navigate([path]);
    window.scrollTo(0, 0);
  }

  ngOnInit(){
    
  }
}
