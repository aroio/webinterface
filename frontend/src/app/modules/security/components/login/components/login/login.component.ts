import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { StorageService } from '../../../../services/storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import { DefaultPageResolverService } from '../../../../services/default-page-resolver.service';
import { isEmail } from '@braune-digital/form-utilities';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'security-login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    isSendingRequest = false;
    form: FormGroup;
    currentLang: string;
    returnUrl: string;

    constructor(
        private api: AuthService,
        private storage: StorageService,
        private router: Router,
        private builder: FormBuilder,
        private defaultPageResolver: DefaultPageResolverService,
        private translate: TranslateService,
        private route: ActivatedRoute
    ) {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required, isEmail]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });

        this.currentLang = this.translate.currentLang;
    }
    handleSubmit(): void {
        if (this.form.valid) {
            this.isSendingRequest = true;
            this.api.getToken(this.form.getRawValue(), this.storage).subscribe(result => {
               this.isSendingRequest = false;

                if (this.route.snapshot.queryParams['returnUrl']) {
                    this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl']);
                } else {
                    this.router.navigate(this.defaultPageResolver.resolve());
                }



               // this.router.navigate(['/', this.translate.currentLang , 'dashboard']);
            }, error => {
                this.isSendingRequest = false;
                this.form.get('password').setValue(null);
            });
        }
    }
}
