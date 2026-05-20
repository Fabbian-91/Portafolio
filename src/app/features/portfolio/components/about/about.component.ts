import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    BadgeComponent,
    LucideAngularModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}