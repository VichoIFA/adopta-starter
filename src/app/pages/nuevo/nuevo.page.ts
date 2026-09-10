import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nuevo',
  templateUrl: 'nuevo.page.html',
  styleUrls: ['nuevo.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton],
})
export class NuevoPage {}
