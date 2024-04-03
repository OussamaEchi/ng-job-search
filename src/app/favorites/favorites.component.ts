import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FavoritesService } from './favorites.service';
import { Subscription } from 'rxjs';
import { Job } from '../jobs/job.model';
import { FavoriteComponent } from './favorite/favorite.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [ FavoriteComponent, NgForOf],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit, OnDestroy{

  jobs: Job[];
  private subscription: Subscription;

  constructor (private favorites: FavoritesService) {}
  
  ngOnInit(): void {
    this.jobs = this.favorites.getJobs();
    this.subscription = this.favorites.jobsChanged
      .subscribe(
        (jobs: Job[]) => {
          this.jobs = jobs;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
