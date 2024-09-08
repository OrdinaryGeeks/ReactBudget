import { useState } from "react";
import BillPage from "./BillPage";
import IncomePage from "./IncomePage";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Grid2, Paper } from "@mui/material";

export default function Finances(){


    const [totalAmount, setTotalAmount] = useState(0);



     const income=(amount:number) =>{

        setTotalAmount(c => c += amount);

    }

    const payment=(amount:number)=>{

        setTotalAmount(c => c-= amount);
    }

    return(

        <>
        <Paper sx={{display:"flex", height:"200px", width:"400px"}} >
        <div>     
           
        <IncomePage income={income}/>
        <BillPage payment={payment}/>
        </div>
        <div>
        
            <Typography variant="h5">
               Monthly Income is: {totalAmount} 
            </Typography>
        </div>
        </Paper>
        </>
    )
    

}