import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from 'home';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    CommonModule,
    HomeComponent,
    MatButtonModule,
    NavBarComponent
],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myangularecommers2';
}
