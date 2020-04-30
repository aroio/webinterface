import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {StorageService} from '../../../../services/storage.service';
import {DefaultPageResolverService} from '../../../../services/default-page-resolver.service';
import {AuthService} from '../../../../services/auth.service';
import {TranslateService} from '@ngx-translate/core';
import {AroioAlertService} from '../../../../../core/services/alert.service';

@Component({
    selector: 'security-password-reset-component',
    templateUrl: './password-reset.component.html'
})
export class PasswordResetComponent implements OnInit, OnDestroy {
    isSendingRequest = false;
    form: FormGroup;
    private hash: string;
    private routeSubscription: Subscription;


    constructor(
        private storage: StorageService,
        public router: Router,
        public translate: TranslateService,
        private route: ActivatedRoute,
        private http: HttpClient,
        private builder: FormBuilder,
        private _alertService: AroioAlertService,
        private _defaultPageResolver: DefaultPageResolverService
    ) {
        this.form = new FormGroup({
            password: new FormControl('', [Validators.required, Validators.minLength(8)]),
            passwordRepeated: new FormControl('', [Validators.required, Validators.minLength(8)])}, this.passwordMatchValidator
        );
    }


    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.hash = params['hash'];
        });
    }


    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
    }

    handleSubmit(): void {
        if (this.form.valid && this.hash) {
            this.isSendingRequest = true;
            this.http.post('/auth/password/' + this.hash, this.form.getRawValue()).subscribe(result => {
                this.isSendingRequest = false;
                AuthService.storeToken(result['token'], this.storage);
                AuthService.setUser(result['token']);
                this._alertService.alert$.next({type: 'success', message: 'security.password_reset.success'});
                this.router.navigate(this._defaultPageResolver.resolve());
            }, error => {
                console.dir(error);
                this.isSendingRequest = false;
            });
        }
    }

    passwordMatchValidator(g: FormGroup) {
        return g.get('password').value === g.get('passwordRepeated').value ? null : {'passwordIsMatching': true};
    }


}
