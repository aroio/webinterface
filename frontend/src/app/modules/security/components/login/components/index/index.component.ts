import { Component } from '@angular/core';
import {environment} from '../../../../../../../environments/environment';

@Component({
    selector: 'security-login-index-component',
    templateUrl: './index.component.html'
})
export class LoginIndexComponent {

    version = environment.version;

}
