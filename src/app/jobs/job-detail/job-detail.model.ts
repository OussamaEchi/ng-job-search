export class JobDetail {
  public title: string;
  public id: number;
  public companyName: string;
  public companyLogo : string;
  public reference : string;
  public industries : string;
  public types : string;
  public publishDate : string;
  public location : string;
  public description : string;

  constructor
  (
    title: string, 
    id: number, 
    companyName: string, 
    companyLogo : string, 
    reference : string, 
    industries : string,
    types : string,
    publishDate : string,
    location : string,
    description : string
  ) {
    this.title = title;
    this.id = id;
    this.companyName = companyName;
    this.companyLogo  = companyLogo;
    this.reference  = reference;
    this.industries  = industries;
    this.types  = types;
    this.publishDate  = publishDate;
    this.location  = location;
    this.description  = description;
  }
}