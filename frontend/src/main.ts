import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {AroioWiModule} from './app/aroio-wi.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AroioWiModule)
  .catch(err => console.error(err));
