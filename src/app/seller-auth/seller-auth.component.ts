import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';



@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor( private seller: SellerService, private router: Router ) { }

  ngOnInit(): void {
  }

  signUp(data:Signup):void{
    console.log(data)
    this.seller.userSignup(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.router.navigate(['seller-home'])
      }
      
    });
  }





}
