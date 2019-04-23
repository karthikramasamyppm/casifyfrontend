import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  categories:any;
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice
    .getCategory()
    .subscribe((res) => {
      this.categories = res['data']['category'];
      console.log(res['data']['category'])
  });
}
  

}
