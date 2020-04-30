import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import {AroioAlertService} from '../../../../../core/services/alert.service';

@Component({
    selector: 'security-password-request-component',
    templateUrl: './password-request.component.html'
})
export class PasswordRequestComponent {
    isSendingRequest = false;
    form: FormGroup;
    currentLang: string;

    constructor(
        public router: Router,
        private http: HttpClient,
        private builder: FormBuilder,
        private _alertService: AroioAlertService,
        private translateService: TranslateService
    ) {
        this.currentLang = this.translateService.currentLang;
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email])
        });
    }


    handleSubmit(): void {
        if (this.form.valid) {
            this.isSendingRequest = true;
            this.http.post('/auth/password', this.form.getRawValue()).subscribe(result => {
                this.isSendingRequest = false;
                this._alertService.alert$.next({type: 'success', message: 'security.password_request.success'});
            }, error => {
                console.dir(error);
                this.isSendingRequest = false;
            });
        }
    }
}
