import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { SplitBillComponent } from './split-bill/split-bill.component';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'split',
        component: SplitBillComponent
    }, {
        path: 'dashboard',
        component: AddPersonComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    SplitBillComponent
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
