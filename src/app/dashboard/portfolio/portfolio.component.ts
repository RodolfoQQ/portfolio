import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone:true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent  implements OnInit {
 almacen=' Proyecto desarrollado con el objetivo de optimizar la gestión de inventarios en almacenes. Cuenta con funcionalidades avanzadas como un potente sistema de búsqueda y visualización detallada de productos. El sistema incorpora una interfaz dinámica e intuitiva que mejora la experiencia del usuario, destacando visualmente el estado de cada pedido mediante un código de colores, facilitando así la rápida identificación de su situación actual. Además, implementa un sistema inteligente de monitoreo de stock: cada ubicación del almacén cambia de color automáticamente según el nivel de existencias, alertando al administrador cuando es necesario reabastecer o tomar acciones preventivas. Esta funcionalidad proactiva garantiza un control eficiente, minimiza errores humanos y mejora significativamente la toma de decisiones'


  constructor() { }

  ngOnInit() {}

}
