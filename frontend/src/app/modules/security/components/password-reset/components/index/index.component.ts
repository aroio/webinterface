import { Component } from '@angular/core';
import {environment} from '../../../../../../../environments/environment';

@Component({
    selector: 'security-password-reset-index-component',
    templateUrl: './index.component.html'
})
export class PasswordResetIndexComponent {

    version = environment.version;

}
