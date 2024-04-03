import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { JobsComponent } from '../../jobs/jobs.component';
import { Job } from '../../jobs/job.model';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [JobsComponent, RouterLink, RouterLinkActive],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  @Input() job: Job;
  @Input() index: number;

}
