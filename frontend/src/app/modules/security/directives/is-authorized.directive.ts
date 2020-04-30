/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 5:46 PM Braune Digital GmbH
 */

import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[isAuthorized]'
})
export class IsAuthorizedDirective implements OnInit, OnDestroy {

  modules: Array<string>;
  private userEventSubscription: Subscription;

  // Is the element currently rendered
  private hasView = false;


  constructor(private _templateRef: TemplateRef<any>,
              private _viewContainer: ViewContainerRef,
              private _storage: StorageService) {
  }


  ngOnInit(): void {
    this.handleChange();
    this.userEventSubscription = AuthService.onAuthenticate.subscribe(_user => {
      if (_user) {
        this.show();
        return;
      }
      this.hide();
    });
  }

  ngOnDestroy(): void {
    if (this.userEventSubscription) {
      this.userEventSubscription.unsubscribe();
      this.userEventSubscription = null;
    }
  }

  private handleChange(): void {
    AuthService.isAuthenticated(this._storage).then(_ => {
      this.show();
    }, _ => {
      this.hide();
    });
  }

  // Show the element
  private show(): void {
    if (!this.hasView) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      this.hasView = true;
    }
  }

  // Hide the element
  private hide(): void {
    if (this.hasView) {
      this._viewContainer.clear();
      this.hasView = false;
    }
  }
}
