import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of, tap } from "rxjs";
import { FavoritesService } from "../favorites/favorites.service";
import { JobDetail } from "./job-detail/job-detail.model";

interface Job{
  title: string,
  id: number,
  companyName: string,
  companyLogo : string,
  reference : string,
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class JobService {
  jobs: Job[] = [];
  jobsUrl = window.location.href + "/jobs";

  constructor(private http: HttpClient, private favorites: FavoritesService) { }

  // getJobs() {
  //   this.http.get<Job[]>('http://localhost:4200/jobs')
  //     .subscribe((response: Job[]) => {
  //       this.jobs = response;
  //   console.log('lol' + this.jobs);
  //     });
  //   return this.http.get<any[]>('http://localhost:4200/jobs');
  // }

  getJobs(): Observable<Job[]> {
    if (this.jobs.length > 0) {
      return of(this.jobs);
    } else {
      return this.http.get<Job[]>(this.jobsUrl).pipe(
        // Prima di assegnare i dati ricevuti a `this.jobs`, aggiunge la proprietà `isFavorite`
        map(jobs => jobs.map(job => ({ ...job, isFavorite: false }))),
        // Salva l'array modificato in `this.jobs`
        tap(jobs => this.jobs = jobs)
      );
    }
  }

  addJobsToFavorites(jobs: Job) {
    jobs.isFavorite = !jobs.isFavorite;
    if (jobs.isFavorite) {
      this.favorites.addJobs(jobs);
    } else {
      this.favorites.removeJob(jobs.id);
    }
  }

  getJobById(id: number): Observable<JobDetail> {
    return this.http.get<JobDetail>(`${this.jobsUrl}/${id}`);
  }

  // getJob(id: number): Observable<Job[]> {
  //   if (this.jobs.length > 0) {
  //     const job = this.jobs.find(job => job.id === id);
  //     return of(job);
  //   }
  // }
}