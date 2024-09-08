import Card from "@mui/material/Card";
import { useState } from "react";

export default function Bill(props:{owedTo :string, amountOwed:number,  payment:(amt:number)=>void}) {


    const [isPayment, setIsPayment] = useState(false);




    return(

        <>
        <div>
            <Card style={{padding:"10px", margin:"10px"}}>
            <p><span style={{padding:"20px"}}>{props.owedTo}</span>
            <span style={{padding:"20px"}}>{props.amountOwed}</span></p>
            {!isPayment &&
            <button onClick={()=>{setIsPayment((c:boolean)=>c=true); props.payment(props.amountOwed)}}>Payment</button>}
            </Card>
        </div>
        </>



    )




}