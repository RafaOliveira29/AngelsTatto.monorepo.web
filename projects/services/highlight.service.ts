import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExternalHighlightService {
  highlightText(words: string[], text: string, color: string): string {
    if (!words || words.length === 0) {
      throw new Error('No words provided for highlighting');
    }
    const escapedWords = words.map((word) => escapeRegExp(word));
    const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
