import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from '../../../../lib/presentation/src/public-api';
import { ExclusiveFeaturesComponent } from '../../../../lib/exclusive-features/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentationComponent, ExclusiveFeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dermato.web';
  listExclusives = [
    'Certificado válido Brasil e exterior',
    'Cursos 100% Apostolados Com Didática Exclusiva',
    'Professores Altamente Qualificados Com 20 Anos De Experiência E Formação Acadêmica Na Área Da Saúde',
    'Nossa Didática Respeita O Crescimento Individualizado',
  ];

  highlightTextPresentation(text: string, color: string): string {
    const regex = /(você aprende tudo|profissional completo)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  highlightTextExclusiveFeatures(text: string, color: string): string {
    const regex =
      /(válido|exterior|Exclusiva|Qualificados|20 Anos|Acadêmica|Saúde|Respeita|Crescimento Individualizado|Flexível|Desconto|Maiores Lojas)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  onClick() {
    console.log('CLICOU E FUNCIONOU');
  }
}
