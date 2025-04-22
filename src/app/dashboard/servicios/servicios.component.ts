import { Component, OnInit } from '@angular/core';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-servicios',
  standalone:true,
  imports:[ContactoComponent],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent  implements OnInit {
    programador="Soy desarrollador de software con experiencia en el diseño e implementación de soluciones tecnológicas adaptadas a las necesidades específicas de cada cliente. Ofrezco servicios integrales de programación, abarcando desde el análisis y modelado de sistemas hasta el desarrollo de aplicaciones web, backend, frontend y gestión de bases de datos. Trabajo con buenas prácticas, metodologías ágiles y un enfoque en la eficiencia, escalabilidad y seguridad del software. Si estás buscando un aliado confiable para tus proyectos tecnológicos, estoy a tu disposición."
  constructor() { }

  ngOnInit() {}

}
