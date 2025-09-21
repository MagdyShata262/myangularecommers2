import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { RouterLink, RouterLinkWithHref, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    RouterLinkWithHref,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    NgIf,
  ],
})
export class NavBarComponent {
  private breakpointObserver = inject(BreakpointObserver);

  // Observe if screen is handset size (mobile)
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay() // Share result to avoid multiple subscriptions
    );

  // Define your navigation links (move hardcoded HTML to dynamic data)
  navLinks = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'Products', path: '/products', icon: 'inventory_2' },
    { label: 'Cart', path: '/cart', icon: 'shopping_cart' },
    { label: 'Orders', path: '/orders', icon: 'receipt_long' },
    { label: 'Profile', path: '/profile', icon: 'person' },
  ];
}
