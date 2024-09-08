import Finances from "./Finances";

export default function Month(props:{month:string, year:string}){











    return(

        <>
        <p><span style={{padding:"10px"}}>{props.month}</span> <span style={{padding:"10px"}}>{props.year}</span></p>
        <Finances/>


        </>
    )
}