import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonList, IonItem, IonInput,
  IonButton, IonText } from '@ionic/angular/standalone';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [FormsModule, IonContent, IonList, IonItem, IonInput,
    IonButton, IonText, RouterLink],
})
export class LoginPage {
  private usuariosService = inject(UsuariosService);
  private router = inject(Router);

  correo = '';
  clave = '';
  error = false;

  entrar(formulario: NgForm): void {
    if (formulario.invalid) {
      return;
    }

    const usuario = this.usuariosService.validar(this.correo, this.clave);
    if (!usuario) {
      this.error = true;
      return;
    }

    this.error = false;
    this.usuariosService.entrar(usuario);
    this.router.navigateByUrl('/galeria');
  }
}
