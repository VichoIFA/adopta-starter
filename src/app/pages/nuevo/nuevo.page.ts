import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonList, IonListHeader, IonLabel,
  IonItem, IonInput, IonSelect, IonSelectOption,
  IonTextarea, IonToggle, IonButton } from '@ionic/angular/standalone';
import { PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: 'nuevo.page.html',
  styleUrls: ['nuevo.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonList, IonListHeader, IonLabel,
    IonItem, IonInput, IonSelect, IonSelectOption,
    IonTextarea, IonToggle, IonButton],
})
export class NuevoPage {
  private perrosService = inject(PerrosService);
  private router = inject(Router);

  nombre = '';
  raza = '';
  edad = '';
  sexo = 'Elija el sexo';
  tamano = 'Elija el tamaño';
  vacunada = false;
  descripcion = '';

  guardar(formulario: NgForm): void {
    if (formulario.invalid) {
      return;
    }

    this.perrosService.agregar({
      id: Date.now(),
      nombre: this.nombre,
      tipo: 'Perro',
      raza: this.raza,
      edad: this.edad,
      sexo: this.sexo,
      tamano: this.tamano,
      vacunada: this.vacunada,
      descripcion: this.descripcion,
      foto: `https://placedog.net/600/600?id=${Math.floor(Math.random() * 100)}`,
      adoptado: false,
    });

    this.router.navigateByUrl('/galeria');
  }
}
