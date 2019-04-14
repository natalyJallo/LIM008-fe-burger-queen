import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-services-second',
  templateUrl: './services-second.component.html',
  styleUrls: ['./services-second.component.css']
})
export class ServicesSecondComponent implements OnInit {

  
  public dataMenuList = new BehaviorSubject([]);
  currentDataMenu = this.dataMenuList.asObservable();

  public arrayDataMenu: Object[] = [];
  
  constructor() { }

  printDataMenu(value) {
    this.arrayDataMenu.push(value);
    this.dataMenuList.next(this.arrayDataMenu);
  }

  ngOnInit() {
  }

}
