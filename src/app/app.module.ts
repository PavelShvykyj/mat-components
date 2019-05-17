import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridShablonComponent } from './grid-shablon/grid-shablon.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';


const globalRippleConfig: RippleGlobalOptions = {
  disabled: false,
  
};


@NgModule({
  declarations: [
    AppComponent,
    GridShablonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule  
  ],
  providers: [{provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
