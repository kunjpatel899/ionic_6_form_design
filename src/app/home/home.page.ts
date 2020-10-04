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
  dotbirth=new FormControl('');
  age=new FormControl('');
  gender=new FormControl('');
  identityCardType=new FormControl('');
  cardNumber=new FormControl('');
  eduLevel=new FormControl('');
  incomeStatus=new FormControl('');
  dailyIncome=new FormControl('');
  maritalStatus=new FormControl('');
  bloodGrop=new FormControl('');
  mono=new FormControl('');
  spouseName=new FormControl('');
  email=new FormControl('');

  siteId=new FormControl('');
  siteName=new FormControl('');
  jobType=new FormControl('');
  jobCharacteristic=new FormControl('');
  durationTo=new FormControl('');
  durationFrom=new FormControl('');
  nearByFaculty=new FormControl('');

  bankName=new FormControl('');
  bankaccount=new FormControl('');
  isfccode=new FormControl('');
  beneficiaryName=new FormControl('');
  presentAddress1=new FormControl('');
  presentAddress2=new FormControl('');
  presentState1=new FormControl('');
  presentDistrict1=new FormControl('');
  PermanentState2=new FormControl('');
  PermanentDistrict2=new FormControl('');
  premanentAddress1=new FormControl('');
  premanentAddress2=new FormControl('');

  noOfMem=new FormControl('');
  noOfOrg=new FormControl('');
  noOfUnorg=new FormControl('');
  incomeIndication=new FormControl('');
  eduStatus=new FormControl('');
  ageOfMarriedWomen=new FormControl('');
  kwh=new FormControl('');
  DrainageConnectivity=new FormControl('');
  houseHold=new FormControl('');
  problem=new FormControl('');
  

  height=new FormControl('');
  weight=new FormControl('');
  mass=new FormControl('');

  constructor() {
    //this.DetailsFormgroup.migrantYes.chec
  }

  submitDetails() {
  }

  toggleGroup(index) {
		console.log("index : " + index);
		if (index != this.index)
			this.index = index;
		else
			this.index = 0;
  }

}
