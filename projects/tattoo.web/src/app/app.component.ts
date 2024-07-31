import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from '../../../../lib/presentation/src/public-api';
import { CompleteTrainingComponent } from '../../../../lib/complete-training/src/public-api';
import { ExclusiveFeaturesComponent } from '../../../../lib/exclusive-features/src/public-api';
import { CourseTestimonialsComponent } from '../../../../lib/course-testimonials/src/public-api';
import { MapScreenComponent } from '../../../../lib/map-screen/src/public-api';
import { ProgramContentComponent } from '../../../../lib/program-content/src/public-api';
import { FooterComponent } from '../../../../lib/footer/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    MapScreenComponent,
    PresentationComponent,
    ProgramContentComponent,
    CompleteTrainingComponent,
    ExclusiveFeaturesComponent,
    CourseTestimonialsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tattoo.web';
  listExclusives = [
    'Certificado válido Brasil e exterior',
    'Cursos 100% Apostolados Com Didática Exclusiva',
    'Professores Altamente Qualificados Com 20 Anos De Experiência E Formação Acadêmica Na Área Da Saúde',
    'Nossa Didática Respeita O Crescimento Individualizado',
    'Horário Flexível',
    'Desconto Em Uma Das Maiores Lojas De Material Para Tattoo',
  ];
  programContenDescription = {
    title: 'Introdução',
    list: [
      'inicial',
      'Historia da Tatuagem',
      'Categorias e suas regras (new school, old school,maori, realismo, freehand, freemachine, oriental, portrait e todas as outras)',
      'Diferença entre biqueiras descartáveis e esterilizadas: qual é a melhor?',
      'Diferenças entre máquinas rotativas e de bobinas',
      'Diferença entre tatuagem e maquiagem definitiva (porque não podemos fazer maquiagem definitiva com tintas e máquinas de tatuagem)',
      'Tebori',
      '',
      'Historia da Tatuagem',
      'Categorias e suas regras (new school, old school,maori, realismo, freehand, freemachine, oriental, portrait e todas as outras)',
      'Diferença entre biqueiras descartáveis e esterilizadas: qual é a melhor?',
      'Diferenças entre máquinas rotativas e de bobinas',
      'Diferença entre tatuagem e maquiagem definitiva (porque não podemos fazer maquiagem definitiva com tintas e máquinas de tatuagem)',
      'Tebori',
      'Historia da Tatuagem',
      'Categorias e suas regras (new school, old school,maori, realismo, freehand, freemachine, oriental, portrait e todas as outras)',
      'Diferença entre biqueiras descartáveis e esterilizadas: qual é a melhor?',
      'Diferenças entre máquinas rotativas e de bobinas',
      'Diferença entre tatuagem e maquiagem definitiva (porque não podemos fazer maquiagem definitiva com tintas e máquinas de tatuagem)',
      'Tebori',
      'final',
    ],
  };

  highlightTextPresentationTitle(text: string, color: string): string {
    const regex = /(elite|curso|completo|você.)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  highlightTextPresentationSubtitle(text: string, color: string): string {
    const regex = /(você aprende tudo|profissional completo)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  highlightTextExclusiveFeatures(text: string, color: string): string {
    const regex =
      /(válido|exterior|Exclusiva|Qualificados|20 Anos|Acadêmica|Saúde|Respeita|Crescimento Individualizado|Flexível|Desconto|Maiores Lojas)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  highlightTextCompleteTraining(text: string, color: string): string {
    const regex = /(completo|\+|realismo)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  highlightTextMapScreen(text: string, color: string): string {
    const regex = /(dúvidas|oportunidade certa)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  highlightTextProgramContent(text: string, color: string): string {
    const regex = /(programático)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  onClick() {
    console.log('CLICOU E FUNCIONOU');
  }
}
