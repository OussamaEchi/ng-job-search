import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

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

export class FavoritesService {
  jobs: Job[] = [];
  jobsChanged = new Subject<Job[]>();

  constructor(private http: HttpClient,) { }

  addJobs(jobs: any) {
    this.jobs.push(jobs);
    this.jobsChanged.next(this.jobs.slice());
    console.log('lol');
  }

  getJobs() {
    return this.jobs.slice();
  }

  removeJob(jobId: number) {
    this.jobs = this.jobs.filter(job => job.id !== jobId);
  }

}