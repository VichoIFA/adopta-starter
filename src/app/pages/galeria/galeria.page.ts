import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle,
  IonContent, IonGrid, IonRow,
  IonCol, IonFab, IonFabButton, IonIcon,
  IonButtons, IonButton, IonNote } from '@ionic/angular/standalone';
import { PerrosService } from '../../services/perros.service';
import { UsuariosService } from '../../services/usuarios.service';

import { addIcons } from 'ionicons';
import { add, logOutOutline } from 'ionicons/icons';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle,
    IonContent, IonRow, IonCol,
    IonGrid, TarjetaPerroComponent, IonFab, IonFabButton, IonIcon,
    IonButtons, IonButton, IonNote,
    RouterLink ],
})
export class GaleriaPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private perrosService = inject(PerrosService);
  private usuariosService = inject(UsuariosService);

  perros = computed(() => this.perrosService.todas());
  usuario = this.usuariosService.usuarioActual;

  constructor() {
    addIcons({ add, logOutOutline });
  }

  salir(): void {
    this.usuariosService.salir();
    this.router.navigateByUrl('/login');
  }
}
