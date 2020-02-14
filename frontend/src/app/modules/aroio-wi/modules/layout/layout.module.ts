import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TooltipModule} from 'ngx-bootstrap';
import {AroioNavigationComponent} from './components/aroio-navigation/aroio-navigation.component';
import {BdBrandComponent} from './components/bd-brand/bd-brand.component';
import {BdContentHeaderComponent} from './components/bd-content/bd-content-header/bd-content-header.component';
import {BdContentComponent} from './components/bd-content/bd-content.component';
import {BdGridComponent} from './components/bd-grid/bd-grid.component';
import {BdLayoutComponent} from './components/bd-layout/bd-layout.component';
import {BdLayoutContentComponent} from './components/bd-layout/bd-layout-content/bd-layout-content.component';
import {BdLayoutSidebarComponent} from './components/bd-layout/bd-layout-sidebar/bd-layout-sidebar.component';
import {BdContentAsideComponent} from './components/bd-content/bd-content-aside/bd-content-aside.component';
import {BdContentMainComponent} from './components/bd-content/bd-content-main/bd-content-main.component';
import {BdContentCenteredComponent} from './components/bd-content/bd-content-centered/bd-content-centered.component';
import {BdHeaderComponent} from './components/bd-header/bd-header.component';
import {BdHeaderMainComponent} from './components/bd-header/bd-header-main/bd-header-main.component';
import {BdHeaderAsideComponent} from './components/bd-header/bd-header-aside/bd-header-aside.component';
import {BdHeaderPostMainComponent} from './components/bd-header/bd-header-post-main/bd-header-post-main.component';
import {BdHeaderPostAsideComponent} from './components/bd-header/bd-header-post-aside/bd-header-post-aside.component';
import {BdSidebarComponent} from './components/bd-sidebar/bd-sidebar.component';
import {BdSidebarPreComponent} from './components/bd-sidebar/bd-sidebar-pre/bd-sidebar-pre.component';
import {BdSidebarMainComponent} from './components/bd-sidebar/bd-sidebar-main/bd-sidebar-main.component';
import {BdSidebarPostComponent} from './components/bd-sidebar/bd-sidebar-post/bd-sidebar-post.component';
import {BdSidebarListComponent} from './components/bd-sidebar/bd-sidebar-list/bd-sidebar-list.component';
import {BdSidebarListItemComponent} from './components/bd-sidebar/bd-sidebar-list-item/bd-sidebar-list-item.component';
import {BdNavAsideComponent} from './components/bd-nav/bd-nav-aside/bd-nav-aside.component';
import {BdNavComponent} from './components/bd-nav/bd-nav.component';
import {BdNavMainComponent} from './components/bd-nav/bd-nav-main/bd-nav-main.component';
import {BdLayoutNavComponent} from './components/bd-layout/bd-layout-nav/bd-layout-nav.component';
import {BdNavSubComponent} from './components/bd-nav/bd-nav-sub/bd-nav-sub.component';
import {BdLoadingComponent} from './utils/bd-loading/bd-loading.component';
import {BdBadgeComponent} from './utils/bd-badge/bd-badge.component';
import {BdColComponent} from './components/bd-col/bd-col.component';
import {BdMessageComponent} from './utils/bd-message/bd-message.component';
import {BdProgressComponent} from './utils/bd-progress/bd-progress.component';
import {BdProgressBarComponent} from './utils/bd-progress-bar/bd-progress-bar.component';
import {BdProgressCircleComponent} from './utils/bd-progress-circle/bd-progress-circle.component';
import {ElementHeightService} from './services/elementHeight.service';
import {BdImageComponent} from './components/bd-image/bd-image.component';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import {BdHamburgerComponent} from './components/bd-hamburger/bd-hamburger.component';
import {AroioSidebarNavComponent} from './components/aroio-sidebar-nav/aroio-sidebar-nav.component';
import {BdItemComponent} from './components/bd-item/bd-item.component';
import {BdIconComponent} from './components/bd-icon/bd-icon.component';
import {BdButtonComponent} from './components/bd-button/bd-button.component';
import {AroioContentItemComponent} from './components/aroio-content-item/aroio-content-item.component';
import {AngularResizedEventModule} from 'angular-resize-event';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule,
    AngularStickyThingsModule,
    AngularResizedEventModule
  ],
  declarations: [
    // ---------------------------
    // Aroio Stuff
    // ---------------------------
    AroioNavigationComponent,
    AroioSidebarNavComponent,
    AroioContentItemComponent,

    // ---------------------------
    // Layout
    // ---------------------------
    BdButtonComponent,
    BdBrandComponent,
    BdContentHeaderComponent,
    BdContentComponent,
    BdGridComponent,
    BdImageComponent,
    BdItemComponent,
    BdIconComponent,
    BdHamburgerComponent,
    BdLayoutComponent,
    BdLayoutContentComponent,
    BdLayoutSidebarComponent,
    BdLoadingComponent,
    BdContentAsideComponent,
    BdContentMainComponent,
    BdContentCenteredComponent,
    BdHeaderComponent,
    BdHeaderMainComponent,
    BdHeaderAsideComponent,
    BdHeaderPostMainComponent,
    BdHeaderPostAsideComponent,
    BdSidebarComponent,
    BdSidebarPreComponent,
    BdSidebarMainComponent,
    BdSidebarPostComponent,
    BdSidebarListComponent,
    BdSidebarListItemComponent,
    BdNavAsideComponent,
    BdNavComponent,
    BdNavMainComponent,
    BdNavSubComponent,
    BdLayoutNavComponent,
    // ---------------------------
    // Utils
    // ---------------------------
    BdBadgeComponent,
    BdColComponent,
    BdMessageComponent,
    BdProgressComponent,
    BdProgressBarComponent,
    BdProgressCircleComponent,
  ],
  exports: [
    // ---------------------------
    // Aroio Stuff
    // ---------------------------
    AroioNavigationComponent,
    AroioSidebarNavComponent,
    AroioContentItemComponent,
    // ---------------------------
    // Layout
    // ---------------------------
    BdButtonComponent,
    BdBrandComponent,
    BdContentHeaderComponent,
    BdContentComponent,
    BdGridComponent,
    BdImageComponent,
    BdItemComponent,
    BdIconComponent,
    BdHamburgerComponent,
    BdLayoutComponent,
    BdLayoutContentComponent,
    BdLayoutSidebarComponent,
    BdLoadingComponent,
    BdContentAsideComponent,
    BdContentMainComponent,
    BdContentCenteredComponent,
    BdHeaderComponent,
    BdHeaderMainComponent,
    BdHeaderAsideComponent,
    BdHeaderPostMainComponent,
    BdHeaderPostAsideComponent,
    BdSidebarComponent,
    BdSidebarPreComponent,
    BdSidebarMainComponent,
    BdSidebarPostComponent,
    BdSidebarListComponent,
    BdSidebarListItemComponent,
    BdNavAsideComponent,
    BdNavComponent,
    BdNavMainComponent,
    BdNavSubComponent,
    BdLayoutNavComponent,
    // ---------------------------
    // Utils
    // ---------------------------
    BdBadgeComponent,
    BdColComponent,
    BdMessageComponent,
    BdProgressComponent,
    BdProgressBarComponent,
    BdProgressCircleComponent,
  ],
  providers: [
    ElementHeightService
  ],
  entryComponents: [],

})
export class AroioLayoutModule {
}
