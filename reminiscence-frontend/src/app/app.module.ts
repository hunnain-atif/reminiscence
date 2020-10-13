import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalListComponent } from './pages/journal-list/journal-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { JournalCardComponent } from './journal-card/journal-card.component';
import { JournalDetailsComponent } from './pages/journal-details/journal-details.component';


@NgModule({
  declarations: [
    AppComponent,
    JournalListComponent,
    MainLayoutComponent,
    JournalCardComponent,
    JournalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
