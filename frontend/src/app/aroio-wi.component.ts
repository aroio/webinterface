import {Component} from '@angular/core';
import {environment} from '../environments/environment';
import {registerLocaleData} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {defineLocale, deLocale} from 'ngx-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';

import localeDE from '@angular/common/locales/de';
import localeDEextra from '@angular/common/locales/extra/de';
import localeEN from '@angular/common/locales/en';
import localeENextra from '@angular/common/locales/extra/en';


registerLocaleData(localeDE, 'de', localeDEextra);
registerLocaleData(localeEN, 'en', localeENextra);


@Component({
  selector: 'aroio-wi-root',
  templateUrl: './aroio-wi.component.html'
})
export class AroioWiComponent {

  version = environment.version;
  currentTranslation = 'en';
  isLoading = false;

  constructor(
    private translate: TranslateService,
  ) {
    this.isLoading = true;

    // defineLocale('de', deLocale);
    // this.translate.use(environment.defaultLocale).subscribe(() => {
    //   this.currentTranslation = this.translate.currentLang;
    //   this.isLoading = false;
    // });
  }
}
