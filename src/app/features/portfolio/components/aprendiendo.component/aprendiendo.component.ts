import { AfterViewInit, Component } from '@angular/core';

declare const lucide: {
  createIcons: () => void;
};

@Component({
  selector: 'app-aprendiendo',
  standalone: true,
  imports: [],
  templateUrl: './aprendiendo.component.html',
  styleUrl: './aprendiendo.component.css',
})
export class AprendiendoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }
}
