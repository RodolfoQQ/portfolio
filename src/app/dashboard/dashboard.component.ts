import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone:true,
  imports:[HomeComponent,NgClass,RouterOutlet,TecnologiasComponent, FooterComponent,ServiciosComponent,PortfolioComponent],
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent  {

  constructor(private router: Router, private activerouter: ActivatedRoute){}

  valormenumovil:boolean=false
  frelacerweb =
    'Diseñador y desarrollador web independiente con sede en Lima, Peru. Amplia experiencia en diseño y desarrollo de sitios web personalizados.';


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gotoTohome()
  }


  openmenumovil(){
    this.valormenumovil= !this.valormenumovil

  }


  gotoTegnologias(){
    this.router.navigate(["tecnologias"],{relativeTo:this.activerouter})
  }
  gotoTohome(){
    this.router.navigate(["home"],{relativeTo:this.activerouter})
  }

  gotoServices(){
    this.router.navigate(["servicios"],{relativeTo:this.activerouter})
  }


  gotoPortfolio(){
    this.router.navigate(["portfolio"],{relativeTo:this.activerouter})
  }




}
