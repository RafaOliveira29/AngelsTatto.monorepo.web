import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from '../../../../lib/presentation/src/public-api';
import { CompleteTrainingComponent } from '../../../../lib/complete-training/src/public-api';
import { ExclusiveFeaturesComponent } from '../../../../lib/exclusive-features/src/public-api';
import { CourseTestimonialsComponent } from '../../../../lib/course-testimonials/src/public-api';
import { MapScreenComponent } from '../../../../lib/map-screen/src/public-api';
import { ProgramContentComponent } from '../../../../lib/program-content/src/public-api';
import { FooterComponent } from '../../../../lib/footer/src/public-api';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tattoo.web';
  // listExclusives = [
  //   'Certificado válido Brasil e exterior',
  //   'Cursos 100% Apostolados Com Didática Exclusiva',
  //   'Professores Altamente Qualificados Com 20 Anos De Experiência E Formação Acadêmica Na Área Da Saúde',
  //   'Nossa Didática Respeita O Crescimento Individualizado',
  //   'Horário Flexível',
  //   'Desconto Em Uma Das Maiores Lojas De Material Para Tattoo',
  // ];

  // programContenDescription = [
  //   {
  //     title: 'Introdução',
  //     list: [
  //       'Historia da Tatuagem',
  //       'Categorias e suas Regras',
  //       'Diferença entre Biqueiras Descartáveis e Esterilizadas, Máquinas Rotativas e Bobinas, Tatuagem e Maquiagem Definitiva',
  //       'Tebori',
  //     ],
  //   },
  //   {
  //     title: 'Anatomia e Fisiologia da Pele',
  //     list: [
  //       'Composição de cada Camada da Pele',
  //       'Diferença de Melanina entre Homens e Mulheres',
  //       'Sensores da Dor',
  //       'A Importância do Colágeno',
  //       'Reações Alérgicas',
  //       'Tatuagem sobre Cicatriz',
  //       'Tatuagem nos Dedos',
  //       'Quelóide',
  //       'Complicações Decorrentes',
  //       'Tatuagem Fixada no Organismo',
  //       'Regiões do Corpo',
  //       'Retoque de Tatuagem ',
  //       'Quem pode ser Tatuado?',
  //       'Problemas de Tatuagem nas Pernas e Pés',
  //     ],
  //   },
  //   {
  //     title: 'Biossegurança',
  //     list: [
  //       'Vacina de Hepatite B e Tétano',
  //       'Limpeza Correta do Estúdio',
  //       'Ventilador na Sala de Procedimento',
  //       'Proibição do Glutaraldeido 2%',
  //       'Ácido Peracético e sua Aplicabilidade',
  //       'EPI’s (Equipamento de Segurança)',
  //       'Ultrasson',
  //       'Autoclave',
  //       'Teste Biológico para a Autoclave',
  //       'Assepsia da Pele',
  //       'Proibição da Estufa',
  //     ],
  //   },
  //   {
  //     title: 'Materiais para Tatuar',
  //     list: [
  //       'Materiais Necessários',
  //       'Tamanho e Utilização de Batoques',
  //       'Vaselina',
  //       'Gel de Ultrasson',
  //       'Manteigas de Cacau',
  //       'Materiais de Auxilio e Acalmante da Pele',
  //     ],
  //   },
  //   {
  //     title: 'Máquina de Tatuagem',
  //     list: [
  //       'Apresentação',
  //       'Maquina Rotativa',
  //       'Analisando Bobinas, Capacitor e seus Componentes',
  //       'Funcionamento Correto da Máquina',
  //       'Montagem e Regulagem da Máquina',
  //       'Manutenção da Máquina',
  //       'Regulagem Híbrida',
  //       'Regulagem para Traço, Pintura e Sombreado',
  //     ],
  //   },
  //   {
  //     title: 'Fonte e Pedal',
  //     list: [
  //       'Qualidade da Fonte',
  //       'Fonte Digital e Analógica',
  //       'Tipos de pedais e sua Funcionalidade',
  //     ],
  //   },
  //   {
  //     title: 'Agulhas',
  //     list: [
  //       'Agulhas: Espessura, Registro ANVISA',
  //       'Traço',
  //       'Buchas e suas Aplicações',
  //       'Magnum MS e suas Aplicações',
  //       'Magnum e suas Aplicações',
  //       'Boldline',
  //       'Agulhas Extras',
  //     ],
  //   },
  //   {
  //     title: 'Biqueiras',
  //     list: [
  //       'Biqueiras Descartáveis e Esterilizadas',
  //       'Biqueiras de Grip Grosso e Grip Fino',
  //     ],
  //   },
  //   {
  //     title: 'Decalque',
  //     list: [
  //       'Decalque em Linha Reta',
  //       'Decalque em Folha Sulfite, Vegetal e Seda',
  //       'Lápis Cópia',
  //       'Stencil/Papel Hectográfico',
  //       'Cortes Estratégicos',
  //       'Transferidores (Líquido, Bastões e Álcool)',
  //     ],
  //   },
  //   {
  //     title: 'Tintas e Pigmentos',
  //     list: [
  //       'Melhores Marcas',
  //       'Tintas Registradas na ANVISA',
  //       'Preparo da Tinta',
  //       'Armazenamento da Tinta',
  //       'Tintas à Base de Água e de Outros Solventes',
  //       'Tinta para Peles Negras',
  //       'Mistura de Tinta para Novos Tons',
  //     ],
  //   },
  //   {
  //     title: 'Como Traçar',
  //     list: [
  //       'Aplicação para um Traço Perfeito',
  //       'Traço em Linha Reta',
  //       'Posicionamento da Mão, Máquina e Movimento',
  //       'Exercícios de Traço',
  //       'Aperfeiçoamento do Traço',
  //     ],
  //   },
  //   {
  //     title: 'Como Pintar?',
  //     list: [
  //       'Roda das Cores',
  //       'Tom da Pele',
  //       'Degrade',
  //       'Exercício de Aplicação, Posicionamento, Inclinação e Movimento',
  //     ],
  //   },
  //   {
  //     title: 'Preto Íntegro',
  //     list: [
  //       'Maori, Samoan e Tribal sem Falhas',
  //       'Aplicação do Preto',
  //       'Diluição',
  //       "Marca D'Água",
  //     ],
  //   },
  //   {
  //     title: 'Sombreamento',
  //     list: [
  //       'Posicionamento da Máquina, Mão e Movimentos',
  //       'Agulhas Corretas',
  //       'Luz e Contra-Luz',
  //       'Sombreamento Sujo e Limpo',
  //       'Degrade de Tons',
  //       'Suavização de Passagem',
  //       'Preparo da Tinta',
  //       'Diluidores',
  //     ],
  //   },
  //   {
  //     title: 'Aquarelado',
  //     list: ['Técnica de Aplicação e Elaboração'],
  //   },
  //   {
  //     title: 'Pontilhismo',
  //     list: ['Pontilhismo', 'Pontilhismo Escovado'],
  //   },
  //   {
  //     title: '',
  //     list: [],
  //     finalText:
  //       'Certificação válida Brasil e exterior, e caso queira pode pegar diploma do MEC através da gente com parceria com a faculdade de Brasília.',
  //   },
  // ];

  // videos = [
  //   'assets/course-testimonials/videos/video1.mp4',
  //   'assets/course-testimonials/videos/video2.mp4',
  //   'assets/course-testimonials/videos/video3.mp4',
  //   'assets/course-testimonials/videos/video4.mp4',
  //   'assets/course-testimonials/videos/video5.mp4',
  //   'assets/course-testimonials/videos/video6.mp4',
  //   'assets/course-testimonials/videos/video7.mp4',
  //   'assets/course-testimonials/videos/video8.mp4',
  //   'assets/course-testimonials/videos/video9.mp4',
  //   'assets/course-testimonials/videos/video10.mp4',
  //   'assets/course-testimonials/videos/video11.mp4',
  //   'assets/course-testimonials/videos/video12.mp4',
  //   'assets/course-testimonials/videos/video13.mp4',
  //   'assets/course-testimonials/videos/video14.mp4',
  //   'assets/course-testimonials/videos/video15.mp4',
  //   'assets/course-testimonials/videos/video16.mp4',
  //   'assets/course-testimonials/videos/video17.mp4',
  //   'assets/course-testimonials/videos/video18.mp4',
  //   'assets/course-testimonials/videos/video19.mp4',
  //   'assets/course-testimonials/videos/video20.mp4',
  // ];

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

  highlightTextCourseTestimonials(text: string, color: string): string {
    const regex = /(elite dos tatuadores)/gi;
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }

  onClick() {
    console.log('CLICOU E FUNCIONOU');
  }
}
