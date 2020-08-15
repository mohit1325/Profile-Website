import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  project: Array<any> = [];
  skillSet: Array<any> = [];
  experience: Array<any> = [];
  achievements: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.project = [
      {
        name: 'Nucleus aka BIRT',
        shortName: 'Business Intelligence Reporting Tool',
        description: `BIRT is a Business Intelligence Reporting Tool which generates Reports based on data which
                      is fetched from either of the
                      datasources. Datasource can be REST API datasource or database or combination of both. The
                      reports which are generated
                      are gridbased reports or graphical datasource. Sorting, Pagination etc functionality are
                      provided`,
        techUsed: 'Spring MVC, Hibernate, Spring Security, Angular 8, Gridster'
      },
      {
        name: 'JSONE',
        shortName: 'Json Editor',
        description: `JSON Editor is POC project which I developed completely from scratch at Morgan Stanley. It is an editor where JSON is recieved from the service and is converted to Simplified structure usable for editing and addition of another fields. It supports all the features of text editor such as Undo,Redo,Expand,Collapse,Copy,Paste and Download as JSON file`,
        techUsed: 'Angular 8 , Bootstrap, Flexbox'
      },
      {
        name: 'IB',
        shortName: 'Inspirobot',
        description: `Inspirobot is a NLP based chatbot which is used to mitigate ongoing depression in modern world. It uses power of slack platform over which it is deployed to reach to people in need of it. It parses the user text and classifies into predefined classes such as personal,relationship,financial and critical depression then gives response accordingly to mitigate it`,
        techUsed: 'Numpy, Pandas, Rasa Core,Slack and NLU using SVM Classifier'
      }
    ];
    this.skillSet = [
      {
        name: 'Java',
        photoUrl: 'assets/java.png'
      },
      {
        name: 'JavaScript',
        photoUrl: 'assets/javascript.png'
      },
      {
        name: 'Angular',
        photoUrl: 'assets/favicon.ico'
      },
      {
        name: 'Spring MVC',
        photoUrl: 'assets/spring.png'
      },
      {
        name: 'Oracle',
        photoUrl: 'assets/oracle.png'
      },
      {
        name: 'MySQL',
        photoUrl: 'assets/mysql.png'
      },
      {
        name: 'Hibernate',
        photoUrl: 'assets/hibernate.png'
      },
    ];
    this.experience = [
      {
        photoUrl: 'assets/wissen.png',
        name: 'Wissen Technology',
        designation: 'Associate Software Engineer',
        description: `Worked and collaborated with various teams and performed discussions with stakeholders to develop features and modules in CHESS CSP Application. 
                    Mentored and guided a team of 3 on new feature development and deployment in existing project.
                    Worked on improving performance of Billing Software FEE BILLING by introducing parallel processing pipelines which improved performance by 12% roughly`
      }
    ];
    this.achievements = [
      {
        name: 'JP Morgan',
        description: 'Part of Code For Good Hackathon held by JP Morgan, ​which aims to select group of developers across the world to help mitigate NGO’s problem with their coding skills. Among Top 20 teams out of 1000+ participants',
        photoUrl: 'assets/jp-morgan.png',
        title: 'Hackathon Participation'
      },
      {
        name: 'ZS Associates',
        description: 'Ranked in top 10 winning teams among 1000+ participating teams across India. Case challenge consists of problems which require statistics, domain knowledge and presentation skills. It is national wide competition',
        photoUrl: 'assets/zs.png',
        title: 'ZS Case Challenge'
      },
      {
        name: 'Technovanza Coding Spree',
        description: `Secured 1st Rank in C programming contest arranged by Technovanza. Among 100+ participants across Mumbai. Contest required exceptional familiarity on C language and Problem solving skills. Held in VJTI campus`,
        photoUrl: 'assets/technovanza.png',
        title: 'C Programming contest'
      }
    ];
  }


}
