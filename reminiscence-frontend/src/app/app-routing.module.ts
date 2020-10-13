import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalDetailsComponent } from './pages/journal-details/journal-details.component';
import { JournalListComponent } from './pages/journal-list/journal-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    {path: '', component: JournalListComponent},
    {path: 'new', component: JournalDetailsComponent},
    {path: ':id', component: JournalDetailsComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
