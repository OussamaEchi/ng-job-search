import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { JobComponent } from './job/job.component';
import { NgForOf } from '@angular/common';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [ JobComponent, NgForOf],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  jobs: Job[];

  constructor (private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }
}
