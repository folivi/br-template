import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AVAILABLE_LANGS } from 'src/app/config/langs';


@Component({
  selector: 'br-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentLocale: String;
  availableLocales = [];

  ngOnInit(): void {

  }

  constructor(private readonly translateService: TranslateService) {
    this.initI18n();
  }

  initI18n(){
    this.translateService.addLangs(AVAILABLE_LANGS.map(l => l.label));
    let currentLocale = localStorage.getItem('LOCALE');
    this.translateService.use(currentLocale ?? 'en');
    this.availableLocales = AVAILABLE_LANGS;
  }

  setLocale(locale: string) {
    this.translateService.use(locale);
    localStorage.setItem('LOCALE', locale);
  }

  isSelectLanguage(lang: string): boolean {
    return localStorage.getItem('LOCALE') == lang;
  }

}
