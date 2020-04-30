import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NavigationService} from './services/navigation.service';
import {AroioAlertService} from './services/alert.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
    ],
    declarations: [],
    exports: [
      AroioAlertService
    ],
    providers: [
        NavigationService,
        AroioAlertService
    ],
})
export class AroioCoreModule {
}
