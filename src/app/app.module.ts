import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './shared/component/footer/footer.component';
import { MaterialModule } from './shared/material/material.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { MoviesModule } from './movies/movies.module';
import { TableComponent } from './shared/component/table/table.component';
import { FieldsModule } from './shared/component/fields/fields.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TableComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    MoviesModule,
    FieldsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
