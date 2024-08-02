import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'body_pirecing.web';

  highlightTextPresentationTitle(text: string, color: string): string {
    const regex = /(BODYPIERCING|GELCO PRO)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  highlightTextPresentationSubtitle(text: string, color: string): string {
    const regex = /(você aprende tudo|profissional completo)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  onClick() {
    console.log('CLICOU E FUNCIONOU');
  }
}
