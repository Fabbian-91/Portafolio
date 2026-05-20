import { AfterViewInit, Component } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';

declare const lucide: {
  createIcons: () => void;
};


@Component({
  selector: 'app-activity',
  imports: [],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css',
})
export class ActivityComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }

  projects: Project[] = [
    {
      title: 'Proyecto 1',
      description: 'Aplicación web desarrollada con buenas prácticas, estructura clara y enfoque funcional.',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      url: 'https://github.com/Fabbian-91'
    },
    {
      title: 'Proyecto 2',
      description: 'Sistema backend orientado a la escalabilidad, persistencia de datos y arquitectura limpia.',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      url: 'https://github.com/Fabbian-91'
    },
    {
      title: 'Proyecto 3',
      description: 'Solución full stack enfocada en diseño responsivo, componentes y lógica de negocio.',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      url: 'https://github.com/Fabbian-91'
    }
  ];
}
