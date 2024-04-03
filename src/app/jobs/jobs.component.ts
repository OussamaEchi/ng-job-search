import { Component } from '@angular/core';
import { JobComponent } from './job-list/job/job.component';
import { NgForOf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { FavoritesService } from '../favorites/favorites.service';
import { Job } from './job.model';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [ JobComponent, NgForOf, RouterOutlet],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})

export class JobsComponent {
  jobs: Job[];
  jobsUrlInfo = "http://localhost:4200/jobs/98596";

  constructor(private http: HttpClient, private favorites: FavoritesService) { }

  ngOnInit() {
    
  }

}
