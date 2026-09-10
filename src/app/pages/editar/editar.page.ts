import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonList, IonListHeader, IonLabel,
  IonItem, IonInput, IonSelect, IonSelectOption,
  IonTextarea, IonToggle, IonButton } from '@ionic/angular/standalone';
import { PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-editar',
  templateUrl: 'editar.page.html',
  styleUrls: ['editar.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonList, IonListHeader, IonLabel,
    IonItem, IonInput, IonSelect, IonSelectOption,
    IonTextarea, IonToggle, IonButton],
})
export class EditarPage {
  private route = inject(ActivatedRoute);
  private perrosService = inject(PerrosService);
  private router = inject(Router);

  private id = this.route.snapshot.paramMap.get('id') ?? '';

  perro = this.perrosService.obtener(this.id);

  nombre = this.perro?.nombre ?? '';
  raza = this.perro?.raza ?? '';
  edad = this.perro?.edad ?? '';
  sexo = this.perro?.sexo ?? 'Macho';
  tamano = this.perro?.tamano ?? 'Mediano';
  vacunada = this.perro?.vacunada ?? false;
  descripcion = this.perro?.descripcion ?? '';
  adoptado = this.perro?.adoptado ?? false;

  guardar(formulario: NgForm): void {
    if (formulario.invalid || !this.perro) {
      return;
    }

    this.perrosService.actualizar(this.perro.id, {
      nombre: this.nombre,
      raza: this.raza,
      edad: this.edad,
      sexo: this.sexo,
      tamano: this.tamano,
      vacunada: this.vacunada,
      descripcion: this.descripcion,
      adoptado: this.adoptado,
    });

    this.router.navigateByUrl(`/detalle/${this.perro.id}`);
  }
}
