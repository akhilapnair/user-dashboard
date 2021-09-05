import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  title = 'User Count';
  type = 'BarChart';
  data = [];
  columnNames = ['Joining Date', 'user'];
  options = {
    hAxis: {
      title: 'Joining Date',
    },
    vAxis: {
      minValue: 1,
    },
    isStacked: true,
  };
  width = 1000;
  height = 1000;
  userList: any;

  constructor(private u_Service: UserService) {}

  ngOnInit(): void {
    this.userList = this.u_Service.initialLoad();
    this.graphData();
  }
  graphData() {
    let joinDate = [];
    this.userList.map((e) => {
      if (e.date != undefined) {
        this.data.push([e.date, 1]);
      }
    });
    console.log('joinDate', joinDate);
    this.userList.forEach((d) => {
      joinDate.map((d) => {});
    });
    console.log('data', this.data);

    // let duplicate =  this.userList.filter((ele,indx)=>indx.date!==this.userList.indexOf(ele.date))
    // console.log('duplicate',duplicate)
    // arr.filter((ele,indx)=>indx===arr.indexOf(ele)
  }
}
