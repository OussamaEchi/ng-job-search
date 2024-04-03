import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobService } from '../job.service';
import { NgIf } from '@angular/common';
import { JobDetail } from './job-detail.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit{
  job: JobDetail;
  id: number;

  constructor (
    private route: ActivatedRoute, 
    private jobService: JobService,
    private router: Router,
    private sanitizer: DomSanitizer
    ) {}

  jobsUrl = "http://localhost:4200/jobs";

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.jobService.getJobById(+jobId).subscribe(job => {
        this.job = job;
      });
    }
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.jobService.getJob(this.id).subscribe(job => {
    //         this.job = job;
    //         console.log(this.job);
    //       });
    //     }
    //   );
    // this.http.get<Job[]>(this.jobsUrl).pipe(
    //   // Prima di assegnare i dati ricevuti a `this.jobs`, aggiunge la proprietà `isFavorite`
    //   map(jobs => jobs.map(job => ({ ...job, isFavorite: false }))),
    //   // Salva l'array modificato in `this.jobs`
    //   tap(jobs => this.jobs = jobs)
    // );
    // this.http.get<any[]>('http://localhost:4200/jobs')
  }

  navigateToJobs() {
    this.router.navigate(['/jobs']); // Usa il percorso corretto verso la tua "home" dei jobs
  }

  sanitize (value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
