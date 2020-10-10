import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalListComponent } from './pages/journal-list/journal-list.component';

const routes: Routes = [
  { path: '', component: JournalListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
