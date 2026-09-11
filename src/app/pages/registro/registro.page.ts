import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonList, IonItem, IonInput,
  IonButton } from '@ionic/angular/standalone';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
  standalone: true,
  imports: [FormsModule, IonContent, IonList, IonItem, IonInput,
    IonButton, RouterLink],
})
export class RegistroPage {
  private usuariosService = inject(UsuariosService);
  private router = inject(Router);

  nombre = '';
  clave = '';
  correo = '';

  registrar(formulario: NgForm): void {
    if (formulario.invalid) {
      return;
    }

    this.usuariosService.registrar({
      id: Date.now(),
      nombre: this.nombre,
      correo: this.correo,
      clave: this.clave,
    });

    this.router.navigateByUrl('/');
  }
}
