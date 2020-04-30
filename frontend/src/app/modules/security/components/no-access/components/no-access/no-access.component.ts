import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../../../services/auth.service';
import {StorageService} from '../../../../services/storage.service';

@Component({
    selector: 'security-no-access-component',
    templateUrl: './no-access.component.html'
})
export class NoAccessComponent {

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _storage: StorageService,
        private _translateService: TranslateService
    ) {
    }

    logout(): void {
        AuthService.forgetToken(this._storage);
        this._router.navigate(['/', this._translateService.currentLang , 'login']);
    }
}
