import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foodData:any;
  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
      this.foodData=this.service.foodDetails;
  }

}
