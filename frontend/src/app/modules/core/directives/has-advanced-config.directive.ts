import {Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {AroioSettingsService} from '../services/aroio-settings.service';

@Directive({
  selector: '[hasAdvanced]'
})
export class HasAdvancedConfigDirective implements OnInit, OnDestroy {

  advancedConfiguration: boolean;
  private settingsSubscription: Subscription;

  // Is the element currently rendered
  private hasView = false;

  constructor(private _templateRef: TemplateRef<any>,
              private _viewContainer: ViewContainerRef,
              private _settingsService: AroioSettingsService
  ) {}


  ngOnInit(): void {
    this.handleChange();
  }

  ngOnDestroy(): void {
    if (this.settingsSubscription) {
      this.settingsSubscription.unsubscribe();
      this.settingsSubscription = null;
    }
  }

  private handleChange(): void {
    this.settingsSubscription = this._settingsService.getAroioSettings().subscribe(settings => {
      this.advancedConfiguration = settings.configuration.webinterface.advanced_configuration;
      if (this.advancedConfiguration) {
        this.show();
        return;
      } else {
        this.hide();
      }
    }, error => {
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
