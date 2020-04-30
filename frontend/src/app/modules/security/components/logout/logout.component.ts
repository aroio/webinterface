import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'security-logout-component',
    templateUrl: './logout.component.html'
})
export class LogoutComponent {

    constructor(
        private auth: AuthService,
        private _storage: StorageService,
        private _router: Router,
        private translateService: TranslateService
    ) {}

    ngOnInit(): void {
        AuthService.forgetToken(this._storage);
        this._router.navigate(['/', this.translateService.currentLang , 'login']);
    }
}
