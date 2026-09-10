import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonBadge, IonCard, IonCardContent, IonCardHeader,
  IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { Perro } from '../../services/perros.service';

@Component({
  selector: 'app-tarjeta-perro',
  templateUrl: 'tarjeta-perro.component.html',
  styleUrls: ['tarjeta-perro.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCardContent, IonBadge, RouterLink],
})
export class TarjetaPerroComponent {
  // La tarjeta recibe el perro desde la página que la use.
  @Input() perro!: Perro;
}
