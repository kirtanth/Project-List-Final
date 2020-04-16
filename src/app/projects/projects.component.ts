import { Component, OnInit } from '@angular/core';
import data from './data.json';



// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: string;
//   symbol: string;
//   complited : boolean;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Node Project 1', weight: 'Node', symbol: '-', complited: true},
//   {position: 2, name: 'Node Project 2', weight: 'Node', symbol: 'Node', complited: true},
//   {position: 3, name: 'Angular Project 1', weight: 'Angular', symbol: '-', complited: true},
//   {position: 4, name: 'Angular Project 2', weight: 'Angular', symbol: 'Angular', complited: true},
//   {position: 5, name: 'Node Angular Project', weight: 'Angular', symbol: 'Node', complited: false},
//   {position: 6, name: 'Node C# Project', weight: 'Angular', symbol: 'C#', complited: false},
// ];




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'complited'];
  // dataSource = ELEMENT_DATA;

  title = 'json-file-read-angular';
  public dataList = data;

  constructor() { }

  ngOnInit(): void {
  }

}
