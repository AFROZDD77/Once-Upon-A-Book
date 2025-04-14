import { Component } from '@angular/core';
import { ThemeService } from 'src/services/themeservice';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private readonly themeService: ThemeService) { }
  
  toggleDarkTheme() {
    this.themeService.toggleDarkMode();
  }

}
