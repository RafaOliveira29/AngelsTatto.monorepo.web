import { Injectable } from '@angular/core';
import { Consts } from '../constants/consts';
import { ExternalHighlightService } from '../../../../services/highlight.service';

interface HighlightItem {
  text: string;
  highlightWords: string[];
}

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  private wordsMap = new Map<string, HighlightItem[]>([
    [
      'presentationTitle',
      [
        {
          text: Consts.presentation.texts.highlighList.presentationTitle.text,
          highlightWords:
            Consts.presentation.texts.highlighList.presentationTitle
              .highlightWords,
        },
      ],
    ],
    [
      'presentationSubtitle',
      [
        {
          text: Consts.presentation.texts.highlighList.presentationSubtitle
            .text,
          highlightWords:
            Consts.presentation.texts.highlighList.presentationSubtitle
              .highlightWords,
        },
      ],
    ],
    [
      'exclusiveFeatures',
      Consts.exclusiveFeatures.texts.highlightList.map((item: any) => ({
        text: item.text,
        highlightWords: item.highlightWords,
      })),
    ],
    [
      'completeTraining',
      [
        {
          text: Consts.completeTraining.texts.highlighList.text,
          highlightWords:
            Consts.completeTraining.texts.highlighList.highlightWords,
        },
      ],
    ],
    [
      'mapScreen',
      [
        {
          text: Consts.mapScreen.texts.highlightList.text,
          highlightWords: Consts.mapScreen.texts.highlightList.highlightWords,
        },
      ],
    ],
    [
      'programContent',
      [
        {
          text: Consts.programContent.texts.highlightList.text,
          highlightWords:
            Consts.programContent.texts.highlightList.highlightWords,
        },
      ],
    ],
    [
      'courseTestimonials',
      [
        {
          text: Consts.courseTestimonials.texts.highlightList.text,
          highlightWords:
            Consts.courseTestimonials.texts.highlightList.highlightWords,
        },
      ],
    ],
  ]);

  constructor(private externalHighlightService: ExternalHighlightService) {}

  highlightText(type: string, color: string): string {
    const items = this.wordsMap.get(type);
    if (!items) {
      throw new Error(`No words found for type: ${type}`);
    }

    return items
      .map((item) => {
        return this.externalHighlightService.highlightText(
          item.highlightWords,
          item.text,
          color
        );
      })
      .join(' ');
  }
}
