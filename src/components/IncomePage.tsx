import Paper from "@mui/material/Paper";
import Income from "./Income";
import { Typography } from "@mui/material";


export default function IncomePage(props:{income:(amt:number)=>void}){









    return(

        <>
        <Paper>
            <Typography 
            component ="p">
                Income
            </Typography>
        <Income income={props.income} amount={300.00}  source ={"Unemployment"}/>
        <Income income={props.income} amount={2000.00} source={"Disability"}/>
        </Paper>

        </>
    )
    
}