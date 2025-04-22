import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contacto',
  standalone:true,
  imports:[],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent  implements OnInit {
  formGroup!: FormGroup;
  enviado =false
  error=''
  constructor(private formBuilder: FormBuilder,  ) {


  }

  ngOnInit() {}



  @ViewChild('formRef') formRef!: ElementRef<HTMLFormElement>;

  enviarEmail(): void {
    emailjs.sendForm(
      'service_xxxxxx',     // 👈 Reemplaza con tu SERVICE ID de EmailJS
      'template_yyyyyy',    // 👈 Reemplaza con tu TEMPLATE ID de EmailJS
      this.formRef.nativeElement,
      'aGZfJEShGNnQfISkD'   // 👈 Reemplaza con tu PUBLIC KEY de EmailJS
    ).then(
      () => {
        alert('¡Mensaje enviado correctamente!');
        this.formRef.nativeElement.reset();
      },
      (error) => {
        console.error('Error al enviar el mensaje:', error.text);
        alert('Hubo un error al enviar el mensaje.');
      }
    );
  }
}

