import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  DetailsFormgroup: any;
  index:any = 0;

  surveyourID=new FormControl('');
  surveyourName=new FormControl('');
  surveyourMono=new FormControl('');
  dateofVisit=new FormControl('');
  airIndexValue=new FormControl('');
  country=new FormControl('');
  state=new FormControl('');
  district=new FormControl('');
  taluka=new FormControl('');
  panchayat=new FormControl('');
  village=new FormControl('');
  location=new FormControl('');

  pm25=new FormControl('');
  pm10=new FormControl('');
  no2=new FormControl('');
  nh3=new FormControl('');
  so2=new FormControl('');
  co=new FormControl('');
  no=new FormControl('');
  ozone=new FormControl('');

  profileId=new FormControl('');
  firstName=new FormControl('');
  surname=new FormControl('');
  fatherName=new FormControl('');

  constructor() {
  }

  submitDetails() {
  }

  radioValue(value) {
    console.log(value)
  }

  toggleGroup(index) {
		console.log("index : " + index);
		if (index != this.index)
			this.index = index;
		else
			this.index = 0;
  }

}
