import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
    this.project = [
      {
        name: 'CHESS CSP',
        shortName: 'CHESS CSP',
        description: `Web based trading application that is used by Morgan Stanley PWM for performing trade activities at ASX (Australian Stock exchange).Roles performed are developing UI/UX for the application.
        Performing UI Automation using Selenium for new feature in development. Testing and reviewing the code using Jasmine and Karma and collaborating with teams for developing new features. Interacting with Product owners and stakeholders over new feature in upcoming sprint (following Agile for development)`,
        techUsed: 'Angular 8,Spring Boot,Oracle DB, SQLDeveloper,Bootstrap,Jasmine,Selenium,Ag-grid'
      },
      {
        name: 'Fee Billing',
        shortName: 'Fee Billing',
        description: `Web based bill generation application that is used by Morgan Stanley PWM for generating bills to clients for their positions/holdings. Roles performed are developing UI/UX for the application. Responsible for writing backend code using Spring MVC and test it using JUnit for new features. Responsible for migrating code written in C++ to Java and bring down the bill generation process from 12 hours to 40 minutes using Multi-threading.Responsible for new UI/UX changes for the application from older ExtJs to Angular 8`,
        techUsed: 'Angular 7, Ag-grid,Spring MVC, DB2 database,JUnit,Jasmine'
      },
      {
        name: 'Nucleus aka BIRT',
        shortName: 'Business Intelligence Reporting Tool',
        description: `BIRT is a Business Intelligence Reporting Tool which generates Reports based on data which
                      is fetched from either of the
                      datasources. Datasource can be REST API datasource or database or combination of both. The
                      reports which are generated
                      are gridbased reports or graphical datasource. Sorting, Pagination etc functionality are
                      provided`,
        techUsed: 'Spring MVC, Hibernate, Spring Security, Angular 8, Gridster',
        link: 'https://github.com/mohit1325/Nucleus'
      },
      {
        name: 'NewsShots',
        shortName: 'News Shots',
        description: `Web based application with RESTful API Architecture curating news articles from Guardian Open API into grid based responsive
layout.Features include category wise filtering news articles, News articles in shorts, social media sharing options like Facebook and
Twitter, Bookmarking news articles through utilization of Web Local Storage`,
        techUsed: 'Angular 8, NodeJS, Express JS, Angular Material, CSS Flexbox',
        link: 'https://github.com/mohit1325/NewsShots'
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
      {
        name: 'Node Js',
        photoUrl: 'assets/nodejs.png'
      }
    ];
    this.experience = [
      {
        photoUrl: 'assets/wissen.png',
        name: 'Wissen Technology',
        designation: 'Associate Software Engineer',
        description: `Worked on designing and developing multithreaded architecture pipeline for Fee-Billing application which brought down the
operation time of generating bills for 4000 clients from 12 hours to 40 minutes.Worked on developing User Interface for EBBOS CHESS application which is web-based trading software.Solely designed, developed and deployed JSON Editor application which is used internally by SDE to edit, save and convert JSON to
other formats like XML with all the features of modern text editors.Worked on technologies such as Spring, Hibernate, Angular 8, MySQL, Oracle 11g, SQL Developer, DB2, Junit, Karma, Jasmine,
Selenium for Automation Testing`
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
  navigateTo(link) {
    window.location.href = link;
  }


}
