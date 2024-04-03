import { Component, Input, OnInit } from '@angular/core';
import { JobsComponent } from '../../jobs.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { JobService } from '../../job.service';
import { Job } from '../../job.model';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [JobsComponent, RouterLink, RouterLinkActive],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit{
  @Input() job: Job;
  @Input() index: number;

  constructor (private jobService: JobService) {}

  ngOnInit(): void {
    console.log(this.job)
  }

  onAddToFavorites() {
    this.jobService.addJobsToFavorites(this.job);
  }
}
