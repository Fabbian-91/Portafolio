import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Technology } from '../../../../shared/models/technology.model';

declare const lucide: {
  createIcons: () => void;
};

@Component({
  selector: 'app-technologies',
  standalone: true,
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TechnologiesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }
  technologies: Technology[] = [
    {
      title: 'Frontend'
    },
    {
      title: 'Backend'
    },
    {
      title: 'Bases de datos'
    },
    {
      title: 'Herramientas'
    }

  ];
}