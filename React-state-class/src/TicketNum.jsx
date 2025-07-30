import './TicketNum.css';

//here num is a PROP which is passed down by parent component
export default function TicketNum({num}){
    return(
        <span>{num}</span>
    )
}