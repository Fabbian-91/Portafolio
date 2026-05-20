import { AfterViewInit, Component } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';

declare const lucide: {
  createIcons: () => void;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }

  projects: Project[] = [
    {
      title: 'Citas Médicas App',
      description: 'Sistema web para la gestión de citas médicas, desarrollado con Angular, Express, TypeORM y MySQL. Incluye autenticación con JWT, control de roles y CRUD de pacientes, médicos y citas.',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      url: 'https://github.com/Fabbian-91/citas-medicas-app'
    },
    {
      title: 'TurnoSync',
      description: 'Sistema de gestión de turnos en Java con arquitectura cliente/servidor concurrente. Utiliza una cola de peticiones para procesar solicitudes simultáneas.',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      url: 'https://github.com/Fabbian-91/TurnoSync'
    },
    {
      title: 'AppServer',
      description: 'Aplicación web con frontend en Angular y TypeScript, backend mediante API con JWT, middleware, DTOs, mappers, controladores y encriptación.',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      url: 'https://github.com/Fabbian-91/AppServer'
    }
  ];
}