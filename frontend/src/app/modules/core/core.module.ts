import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NavigationService} from './services/navigation.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        NavigationService,
    ],
})
export class AroioCoreModule {
}
