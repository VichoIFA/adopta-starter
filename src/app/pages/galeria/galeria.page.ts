import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, 
  IonContent, IonGrid, IonRow, 
  IonCol, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { PerrosService } from '../../services/perros.service';

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, 
    IonContent, IonRow, IonCol, 
    IonGrid, TarjetaPerroComponent, IonFab, IonFabButton, IonIcon,
    RouterLink ],
})
export class GaleriaPage {
  private route = inject(ActivatedRoute);
  private perrosService = inject(PerrosService);

  perros = computed(() => this.perrosService.todas());

  constructor() {
    addIcons({ add });
  }
}
