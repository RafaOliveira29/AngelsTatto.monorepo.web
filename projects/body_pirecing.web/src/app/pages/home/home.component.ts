import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Consts } from '../../constants/consts';
import { styles } from '../../shared/styles/styles';
import { _publicConsts } from '../../constants/_public/_public';
import { HighlightService } from '../../services/highlight.service';
import { FooterComponent } from '../../../../../lib/footer/src/public-api';
import { MapScreenComponent } from '../../../../../lib/map-screen/src/public-api';
import { PresentationComponent } from '../../../../../lib/presentation/src/public-api';
import { ProgramContentComponent } from '../../../../../lib/program-content/src/public-api';
import { CompleteTrainingComponent } from '../../../../../lib/complete-training/src/public-api';
import { ExclusiveFeaturesComponent } from '../../../../../lib/exclusive-features/src/public-api';
import { CourseTestimonialsComponent } from '../../../../../lib/course-testimonials/src/public-api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    MapScreenComponent,
    PresentationComponent,
    ProgramContentComponent,
    CompleteTrainingComponent,
    ExclusiveFeaturesComponent,
    CourseTestimonialsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HighlightService],
})
export class HomeComponent {
  white = styles.colors.white;
  logoUrl = _publicConsts.urls.logo;
  highlightColor = styles.colors.highlightColor;

  //presentation
  textButton = Consts.presentation.texts.button;

  //programContent
  programContenDescription =
    Consts.programContent.texts.programContentDescription;

  //exclusiveFeatures
  mainImageExclusiveFeatures = Consts.exclusiveFeatures.urls.mainImage;
  descriptionExclusiveFeatures = Consts.exclusiveFeatures.texts.description;
  bulletDescriptionExclusiveFeatures =
    Consts.exclusiveFeatures.texts.bulletDescription;

  //courseTestemunials
  videos = Consts.courseTestimonials.videos;
  vectorUrlCourseTestemunials = Consts.courseTestimonials.urls.vectUrl;

  //completeTraining
  imageBottomUrl = Consts.completeTraining.urls.vector;
  imageUrl = Consts.completeTraining.urls.plasticTexture;
  periodBox1 = Consts.completeTraining.texts.periodBox1;
  periodBox2 = Consts.completeTraining.texts.periodBox2;
  contentBox1 = Consts.completeTraining.texts.contentBox1;
  contentBox2 = Consts.completeTraining.texts.contentBox2;
  completeTraining = Consts.completeTraining.texts.completeTraining;
  discountCompleteTraining = Consts.completeTraining.texts.discount;
  unmissableOpportunity = Consts.completeTraining.texts.unmissableOpportunity;

  //programContent
  subtitleProgramContent = Consts.programContent.texts.subtitle;

  //mapScreen
  wppIcon = Consts.mapScreen.urls.wppIcon;
  starIcon = Consts.mapScreen.urls.starIcon;
  mapImageUrl = Consts.mapScreen.urls.mapUrl;
  atSignIcon = Consts.mapScreen.urls.atSignIcon;
  addressTextMapScreen = Consts.mapScreen.texts.address;

  constructor(
    private sanitizer: DomSanitizer,
    private highlightService: HighlightService
  ) {}

  getSanitizedHighlightedText(type: string): SafeHtml {
    const highlightedText = this.highlightService.highlightText(
      type,
      this.highlightColor
    );
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }

  sanitizedTitleFn = (): SafeHtml => {
    return this.getSanitizedHighlightedText('presentationTitle');
  };

  sanitizedSubtitleFn = (): SafeHtml => {
    return this.getSanitizedHighlightedText('presentationSubtitle');
  };

  sanitizedListExclusives = (): SafeHtml => {
    return this.getSanitizedHighlightedText('exclusiveFeatures');
  };

  sanitizedCourseTestimonials = (): SafeHtml => {
    return this.getSanitizedHighlightedText('courseTestimonials');
  };

  sanitizedCompleteTraining = (): SafeHtml => {
    return this.getSanitizedHighlightedText('completeTraining');
  };

  sanitizedProgramContent = (): SafeHtml => {
    return this.getSanitizedHighlightedText('programContent');
  };

  sanitizedMapScreen = (): SafeHtml => {
    return this.getSanitizedHighlightedText('mapScreen');
  };
}
