import Typography from "@mui/material/Typography";
import Bill from "./Bill";
import Paper from "@mui/material/Paper";

export default function BillPage(props:{payment:(amt:number)=>void}){








return(

<>
        <Paper>
            <Typography 
            component ="p">
                Bills
            </Typography>
        <Bill owedTo={"Disney"} amountOwed={15.50} payment={props.payment}/>
        <Bill owedTo={"MLGW"} amountOwed={200.50} payment={props.payment}/>
        <Bill owedTo={"HLPD"} amountOwed={500} payment={props.payment}/>
        </Paper>
</>
)




}