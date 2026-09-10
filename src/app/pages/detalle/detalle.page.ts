import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonList,
  IonItem, IonLabel, IonNote, IonListHeader, IonButton } from '@ionic/angular/standalone';
import { PerrosService } from '../../services/perros.service';


@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonList,
    IonItem, IonLabel, IonNote, IonListHeader, IonButton, RouterLink],
})
export class DetallePage {
  private route = inject(ActivatedRoute);
  private perrosService = inject(PerrosService);
  private id = this.route.snapshot.paramMap.get('id') ?? '';

  perro = computed(() => this.perrosService.obtener(this.id));

  adoptar(): void {
    const perro = this.perro();
    if (perro) {
      this.perrosService.actualizar(perro.id, { adoptado: true });
    }
  }
}
