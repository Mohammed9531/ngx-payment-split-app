import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { SplitBillComponent } from './split-bill/split-bill.component';
import { SplitFormComponent } from './split-form/split-form.component';
import { SplitFormRowComponent } from './split-form/split-form-row/split-form-row.component';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/form',
        pathMatch: 'full'
    }, {
        path: 'split',
        component: SplitBillComponent
    }, {
        path: 'dashboard',
        component: AddPersonComponent
    }, {
        path: 'form',
        component: SplitFormComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    SplitBillComponent,
    SplitFormComponent,
    SplitFormRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
