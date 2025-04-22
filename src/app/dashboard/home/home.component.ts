import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true, // Componente standalone
  imports:[NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  {
  valormenumovil:boolean=false
  frelacerweb =
    'Diseñador y desarrollador web independiente con sede en Lima, Peru. Amplia experiencia en diseño y desarrollo de sitios web personalizados.';
    resposive="Progrmacion adaptable a entornos moviles,con codigo modular que permitira que tu aplicacion siga creciendo."
    escalablechild='Una web escalable es aquella que está diseñada para crecer y adaptarse de forma eficiente a medida que aumentan los usuarios, el tráfico o la funcionalidad del sitio. En otras palabras, una web escalable puede mantener un buen rendimiento incluso cuando la demanda sobre ella se incrementa significativamente.'
    personalizadachild='Diseñar una web personalizada mediante código significa desarrollar cada parte del sitio según las necesidades específicas del proyecto, sin depender exclusivamente de plantillas o constructores visuales. Esta forma de trabajar permite tener control total sobre el diseño, el comportamiento y la funcionalidad del sitio web.'
    ngOnInit(): void {

}
constructor(private router: Router, private activerouter: ActivatedRoute){}

@ViewChild('persChild')persChild!:ElementRef;
@ViewChild('escChild')escChild!:ElementRef;
@ViewChild('mobiChild')mobiChild!:ElementRef;

openmenumovil(){
  this.valormenumovil= !this.valormenumovil

}

moviles(ruta:string){

this.mobiChild.nativeElement.scrollIntoView(
  {behavior: "smooth", block: "start", inline: "nearest"}
)

    }

    escalable(ruta:string){
      this.escChild.nativeElement.scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"
      })

    }


    personalizado(ruta:string){
      this.persChild.nativeElement.scrollIntoView(
        {behavior: "smooth", block: "start", inline: "nearest"}
      )
  }
    gotoportafolio(){
      this.router.navigate(["/dashboard/portfolio"])
    }




}
