import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobsComponent, children: [
    { path: '', component: JobListComponent },
    { path: ':id', component: JobDetailComponent },
  ] },
  { path: 'favorites', component: FavoritesComponent },
];
