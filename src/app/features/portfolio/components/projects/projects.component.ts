import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Citas Médicas App',
      description: 'Sistema web de citas médicas con Angular, Express, MySQL, autenticación JWT, roles y despliegue con Docker.',
      name: 'CalendarHeart',
      imageUrl: 'https://img.magnific.com/vector-gratis/ilustracion-plana-concepto-servicio-hospital_1150-50287.jpg',
      url: 'https://github.com/Fabbian-91/citas-medicas-app',
      features: [
        'Angular + Express + MySQL',
        'Control de roles y rutas protegidas',
        'CRUD de pacientes, médicos y citas',
        'Despliegue con Docker Compose'
      ]
    },
    {
      title: 'TurnoSync',
      description: 'Sistema Java cliente/servidor para gestionar turnos con autenticación, roles y concurrencia.',
      name: 'CalendarClock',
      imageUrl: 'https://img.freepik.com/vector-premium/diferentes-personas-esperando-su-turno-entrevista-trabajo_23-2148639369.jpg',
      url: 'https://github.com/Fabbian-91/TurnoSync',
      features: [
        'Java Swing + Sockets TCP',
        'Autenticación y control de roles',
        'Gestión concurrente de turnos',
        'Multithreading con Producer–Consumer'
      ]
    },
    {
      title: 'Portafolio Web',
      description: 'Portafolio personal Full Stack creado con Angular, Tailwind CSS y daisyUI, con proyectos, tecnologías, GitHub y contacto.',
      name: 'briefcase-business',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/994/823/non_2x/briefcase-with-work-gallery-and-file-collection-online-portfolio-concept-preview-folder-presentation-artist-designer-or-photographer-modern-flat-cartoon-style-illustration-vector.jpg',
      url: 'https://github.com/Fabbian-91/Portafolio',
      features: [
        'Angular + Tailwind CSS',
        'Diseño responsive y moderno',
        'Sección de proyectos destacados',
        'Integración con GitHub y contacto'
      ]
    }
  ];
}