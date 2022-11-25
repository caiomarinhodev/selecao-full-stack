import { Component, OnInit } from '@angular/core';
import { AppTranslateService } from '../../service/translate.service';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {

  public lang: String;

  public langs = [
    { code: 'en', name: 'ENGLISH' },
    { code: 'es', name: 'SPANISH' },
    { code: 'pt', name: 'PORTUGUESE' }
  ];

  constructor(private translateService: AppTranslateService) { }

  ngOnInit() {
    this.lang = this.translateService.getLang();
    console.log(this.lang);
  }


  public setLang(lang): void {
    this.lang = lang;
    this.translateService.setLang(lang);
  }



}
