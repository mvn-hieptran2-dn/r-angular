import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageContentComponent } from './main/content/content.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './main/content/list/list.component';
import { ProductDetailComponent } from './main/content/details/details.component';
import { PositionColor } from './main/content/postsitioncolor/positioncolor.directive';
import { AvatarPipe } from './main/content/pipe/avatar.pipe';
import { PhoneDirective } from './main/content/phonecolor/phone.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageContentComponent,
    SidebarComponent,
    MainComponent,
    ListComponent,
    ProductDetailComponent,
    PositionColor,
    AvatarPipe,
    PhoneDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
