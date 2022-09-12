import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { BillGeneration } from './BillGeneration/BillGeneration.service';
import { BillFormComponent } from './BillGeneration/bill-form/bill-form.component';
import { HeaderComponent } from './header/header.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BillDatatableComponent } from './BillGeneration/bill-datatable/bill-datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    BillDatatableComponent,
    BillFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatInputModule,
    MatCardModule, HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule, MatToolbarModule, MatProgressSpinnerModule,
    MatExpansionModule, FormsModule, CommonModule, ReactiveFormsModule, NgxDatatableModule
  ],
  providers: [BillGeneration],
  bootstrap: [AppComponent]
})
export class AppModule { }
