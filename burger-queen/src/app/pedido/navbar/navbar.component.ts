import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  showOverview(){
    this.router.navigate(['desayuno'], { relativeTo: this.route });
  }

  showContact(){
    this.router.navigate(['almuerzo'], { relativeTo: this.route });
  }

}
