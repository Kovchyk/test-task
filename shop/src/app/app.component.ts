import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgForm} from '@angular/forms';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService,
              private cartService: CartService) {}
}
