import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss'],
})
export class MenupageComponent implements OnInit {
  getMenuId: any;
  menuData:any;
  constructor(
    private param: ActivatedRoute,
    private service: OrderDetailsService
  ) {}

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getMenuId');
    if(this.getMenuId)
    {
      this.menuData= this.service.foodDetails.filter((value)=>{
        return value.id==this.getMenuId;
      })
    }
    console.log(this.menuData);

  }


}
