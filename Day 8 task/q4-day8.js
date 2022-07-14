class Uber
{
    constructor(basefare,costpermile,costperminute,timeofride,ridedistance,bookingfee){
        {
            this.basefare=basefare;
            this.costpermile=costpermile;
            this.costperminute=costperminute;
            this.timeofride=timeofride;
            this.ridedistance=ridedistance;
            this.bookingfee=bookingfee;
        }
    }

getfare()
{
    console.log(`The fare is : Rs. ${this.basefare+((this.costperminute*this.timeofride)+(this.costpermile*this.ridedistance))+this.bookingfee}`);
}
}

let ride= new Uber(40,15,1.5,10,20,30);
ride.getfare();