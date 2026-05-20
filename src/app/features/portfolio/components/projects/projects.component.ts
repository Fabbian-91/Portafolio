import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Citas Médicas App',
      description: 'Aplicación web full stack para la gestión de citas médicas, desarrollada con Angular, Express, TypeScript, TypeORM y MySQL. Incluye autenticación JWT, control de roles, CRUD de pacientes, médicos y citas, validación de disponibilidad horaria y despliegue mediante Docker.',
      imageUrl: 'https://img.magnific.com/vector-gratis/ilustracion-plana-concepto-servicio-hospital_1150-50287.jpg',
      url: 'https://github.com/Fabbian-91/citas-medicas-app'
    },
    {
      title: 'TurnoSync',
      description: 'Aplicación cliente/servidor en Java para la gestión concurrente de turnos, desarrollada con Java Swing, Sockets TCP, multithreading, JDBC y MySQL. Incluye autenticación por roles, procesamiento de solicitudes con Producer–Consumer y control de concurrencia para manejar múltiples usuarios simultáneamente.',
      imageUrl: 'https://img.freepik.com/vector-premium/diferentes-personas-esperando-su-turno-entrevista-trabajo_23-2148639369.jpg',
      url: 'https://github.com/Fabbian-91/TurnoSync'
    },
    {
      title: 'Portafolio',
      description: 'Portafolio personal desarrollado con Angular, Tailwind CSS y daisyUI. Presenta mi perfil como desarrollador Full Stack, tecnologías, proyectos destacados, actividad en GitHub y contacto, con diseño moderno, oscuro, responsive y profesional.',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/994/823/non_2x/briefcase-with-work-gallery-and-file-collection-online-portfolio-concept-preview-folder-presentation-artist-designer-or-photographer-modern-flat-cartoon-style-illustration-vector.jpg',
      url: 'https://github.com/Fabbian-91/Portafolio'
    }
  ];
}