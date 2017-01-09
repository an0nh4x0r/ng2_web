import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor() {
    this.jbtHeading = 'Hello World';
    this.jbtText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, aspernatur cum eius esse facer';
    this.jbtBtnText = 'Read More';
    this.jbtBtnUrl = '/about';
  }

  ngOnInit() {
  }

}
