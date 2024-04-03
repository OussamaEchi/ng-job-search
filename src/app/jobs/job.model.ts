export class Job {
  public title: string;
  id: number;
  public companyName: string;
  public companyLogo : string;
  public reference : string;
  isFavorite: boolean;

  constructor(title: string, id: number, companyName: string, companyLogo : string, reference : string, isFavorite : boolean) {
    this.title = title;
    this.id = id;
    this.companyName = companyName;
    this.companyLogo  = companyLogo;
    this.reference  = reference;
    this.isFavorite  = isFavorite;
  }
}