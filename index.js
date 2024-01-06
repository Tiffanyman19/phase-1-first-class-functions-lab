// Code your solution in this file!
const returnFirstTwoDrivers=(drivers)=>{
    let new_array =[];
    const a = (function(){
       new_array = drivers.slice(0,2);
       return new_array;
   });
   return a();
  
}
const returnLastTwoDrivers=(drivers)=>{
    
    const a = (function(){
       drivers = drivers.slice(-2);
       return drivers;
   });
   return a();
};
let selectingDrivers=[
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];
const createFareMultiplier=(value)=>
{
    const fareMultiplier=()=>{return value*value};
    return fareMultiplier;
  
}

const fareDoubler=(value)=>
{
    const a = createFareMultiplier(value);
    
    return Math.sqrt(a())*2; 
}
const fareTripler =(value)=>
{
    const a = createFareMultiplier(value);
    
    return Math.sqrt(a())*3; 
}
const selectDifferentDrivers=(drivers, f)=>
{
   if (f===returnFirstTwoDrivers)
   {
     return drivers = f(drivers);
   }
   else if (f===returnLastTwoDrivers)
   {
     return drivers = f(drivers);
   }
}