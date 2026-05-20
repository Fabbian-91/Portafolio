import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SectionDividerComponent } from '../../shared/components/section-divider/section-divider.component';
import { AprendiendoComponent } from './components/aprendiendo.component/aprendiendo.component';
import { ActivityComponent } from './components/activity.component/activity.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    TechnologiesComponent,
    ProjectsComponent,
    SectionDividerComponent,
    AprendiendoComponent,
    ActivityComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {}
