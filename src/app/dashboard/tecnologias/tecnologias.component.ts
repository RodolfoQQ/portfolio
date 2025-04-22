import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tecnologias',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss'],
})
export class TecnologiasComponent  implements OnInit {
  angular="Angular destaca por su arquitectura basada en componentes, su integración con TypeScript y su potente CLI, lo que permite desarrollar aplicaciones web escalables, mantenibles y con código limpio. Además, su data binding bidireccional y el sistema de inyección de dependencias agilizan el desarrollo y mejoran el rendimiento general de la aplicación."
  spring="Spring es un potente framework para Java que permite crear aplicaciones robustas, seguras y escalables gracias a su inyección de dependencias, su integración con bases de datos y su soporte para desarrollo web con Spring Boot. Su arquitectura modular y su amplio ecosistema facilitan el desarrollo ágil, reducen el código repetitivo y promueven buenas prácticas desde el inicio."
  sql="SQL es el lenguaje estándar para gestionar bases de datos relacionales, y MySQL es uno de los motores más populares, rápidos y confiables que lo implementa. Juntos permiten almacenar, consultar y manipular datos de forma eficiente, segura y estructurada, siendo ideales para aplicaciones web, sistemas empresariales y proyectos que requieren escalabilidad y alto rendimiento."
  doker="Docker permite empaquetar aplicaciones con todas sus dependencias en contenedores ligeros y portables, garantizando que funcionen igual en cualquier entorno. Con Docker Compose, puedes definir y administrar múltiples contenedores (como bases de datos, backends y frontends) de forma sencilla desde un solo archivo, lo que facilita el desarrollo, despliegue y escalabilidad de sistemas complejos."
  otros="Bootstrap y Angular Material agilizan el diseño de interfaces modernas y responsivas; Photoshop e Illustrator permiten crear gráficos profesionales de alto impacto; Angular facilita el desarrollo web estructurado; y AWS ofrece una infraestructura escalable y segura para desplegar todo el proyecto en la nube, integrando diseño, funcionalidad y rendimiento en un solo ecosistema."
  constructor() { }

  ngOnInit() {}

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
      element.blur();
    }
  }

  inicio(){
    //sube toda la pantalla
    window.scrollTo({top:0})

  }



}
