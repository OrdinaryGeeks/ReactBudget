import Box from "@mui/material/Box";
import Month from "./Month";
import { JSX } from "react/jsx-runtime";

export default function Calendar(props:{year:number, month:number}){



   const monthsLeft= 12 - props.month;

   let monthsTSXArray: JSX.Element[] = [];
   let monthsTSX = "";
   for(let i = props.month; i<=12; i++)
   {

    if(i == 1)
    monthsTSXArray.push(<Month month={"January"} year={props.year.toString()}/>);
    if(i == 2)
        monthsTSXArray .push( <Month month={"February"} year={props.year.toString()}/>);
    if(i == 3)
        monthsTSXArray .push( <Month month={"March"} year={props.year.toString()}/>);
    if(i == 4)
        monthsTSXArray .push( <Month month={"April"} year={props.year.toString()}/>);
    if(i == 5)
        monthsTSXArray .push( <Month month={"May"} year={props.year.toString()}/>);
    if(i == 6)
        monthsTSXArray .push( <Month month={"June"} year={props.year.toString()}/>);
    if(i == 7)
        monthsTSXArray .push( <Month month={"July"} year={props.year.toString()}/>);
    if(i == 8)
        monthsTSXArray .push( <Month month={"August"} year={props.year.toString()}/>);
    if(i == 9)
        monthsTSXArray .push( <Month month={"September"} year={props.year.toString()}/>);
    if(i == 10)
        monthsTSXArray .push( <Month month={"October"} year={props.year.toString()}/>);
    if(i == 11)
        monthsTSXArray .push( <Month month={"November"} year={props.year.toString()}/>);
    if(i == 12)
        monthsTSXArray .push( <Month month={"December"} year={props.year.toString()}/>);


   }

   for(let i = 1; i<props.month; i++)
    {
 
     if(i == 1)
     monthsTSXArray .push( <Month month={"January"} year={(props.year + 1).toString()}/>);
     if(i == 2)
         monthsTSXArray .push( <Month month={"February"} year={(props.year + 1).toString()}/>);
     if(i == 3)
         monthsTSXArray .push( <Month month={"March"} year={(props.year + 1).toString()}/>);
     if(i == 4)
         monthsTSXArray .push( <Month month={"April"} year={(props.year + 1).toString()}/>);
     if(i == 5)
         monthsTSXArray .push( <Month month={"May"} year={(props.year + 1).toString()}/>);
     if(i == 6)
         monthsTSXArray .push( <Month month={"June"} year={(props.year + 1).toString()}/>);
     if(i == 7)
         monthsTSXArray .push( <Month month={"July"} year={(props.year + 1).toString()}/>);
     if(i == 8)
         monthsTSXArray .push( <Month month={"August"} year={(props.year + 1).toString()}/>);
     if(i == 9)
         monthsTSXArray .push( <Month month={"September"} year={(props.year + 1).toString()}/>);
     if(i == 10)
         monthsTSXArray .push( <Month month={"October"} year={(props.year + 1).toString()}/>);
     if(i == 11)
         monthsTSXArray .push( <Month month={"November"} year={(props.year + 1).toString()}/>);
     if(i == 12)
         monthsTSXArray .push( <Month month={"December"} year={(props.year + 1).toString()+""}/>);
 
 
    }

    function MonthsCalendar(){

        return monthsTSXArray;
    }


return (

<Box sx={{display:"flex"}}>

<MonthsCalendar></MonthsCalendar>



    
</Box>




)


}