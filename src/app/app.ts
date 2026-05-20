import { Component } from '@angular/core';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    LucideAngularModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }