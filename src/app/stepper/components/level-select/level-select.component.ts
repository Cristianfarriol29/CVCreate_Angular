import { assignParameterToHTMLElement, emptyAnInput } from 'src/app/helpers/helpers';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.scss']
})
export class LevelSelectComponent implements OnInit {

  @Output() addLanguage = new EventEmitter<string>() ;
  @Input() idSelectInput: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  languagesLevel(language: string) {
  let selectedLanguage = assignParameterToHTMLElement(language);
   this.addLanguage.emit(selectedLanguage);
   return;
  }

}
