import { Button, Card } from "@mui/material";
import { useState } from "react";


export default function Income(props:{amount : number, source: string, income:(amt:number)=>void})
{


    const [isIncome, setIsIncome] = useState(false);


    return(


        <>
        <div>
            <Card style={{padding:"10px", margin:"10px"}}>
            
            <p><span style={{padding:"20px"}}>{props.source}</span>
            <span style={{padding:"20px"}}>{props.amount}</span></p>

            {!isIncome && (<button onClick={() =>{setIsIncome(c=>c=true); props.income(props.amount);}}>Income</button>)}
            </Card>
        </div>
        </>



    )


}