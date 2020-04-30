import { Component } from '@angular/core';
import {environment} from '../../../../../../../environments/environment';

@Component({
    selector: 'security-password-request-index-component',
    templateUrl: './index.component.html'
})
export class PasswordRequestIndexComponent {

    version = environment.version;

}
