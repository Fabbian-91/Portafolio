import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent {}