import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './shared/material.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    // Oh, I used a component from Material, better use the whole material module containing everithing !
    MaterialModule
    // The only modules we needed ----> MatListModule, MatSidenavModule <----
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
