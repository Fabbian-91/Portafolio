import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Technology } from '../../../../shared/models/technology.model';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TechnologiesComponent {
  technologies: Technology[] = [
    { title: 'Frontend' },
    { title: 'Backend' },
    { title: 'Bases de datos' },
    { title: 'Herramientas' }
  ];
}