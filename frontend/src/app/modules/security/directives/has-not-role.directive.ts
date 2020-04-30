import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Directive({
  selector: '[hasNotRoles]'
})
export class HasNotRoleDirective implements OnInit, OnDestroy {

  roles: Array<string>;
  private userEventSubscription: Subscription;

  // Is the element currently rendered
  private hasView = false;

  /**
   * @param {[string , string]} condition
   */
  @Input()
  set hasNotRoles(roles: Array<string>) {
    this.roles = roles;
    this.handleChange();
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private cdr: ChangeDetectorRef) {

  }


  ngOnInit(): void {
    //this.userEventSubscription = AuthService.loggedInEvent.subscribe(u => {
    //  this.cdr.markForCheck();
    //  this.handleChange();
    //});
  }

  ngOnDestroy(): void {
    if (this.userEventSubscription) {
      this.userEventSubscription.unsubscribe();
      this.userEventSubscription = null;
    }
  }

  private handleChange(): void {
    if (AuthService.user.roles.filter(role => this.roles.includes(role)).length > 0) {
      this.hide();
    } else {
      this.show();
    }
  }

  // Show the element
  private show(): void {
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }

  // Hide the element
  private hide(): void {
    if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
