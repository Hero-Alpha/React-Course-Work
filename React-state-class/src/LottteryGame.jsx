import { useState } from "react";
import './Lottery.css';
import { getTicket, sum } from "./helper";
import Ticket from "./Ticket";


export default function LotteryGame({n=3, winningSum=15}){

    let [ticket, setTicket] = useState(getTicket(n));

    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () =>{
        setTicket(getTicket(n));
    }
    return(
        <div>
            <Ticket ticket = {ticket}></Ticket>
            <br />
            <button className="deletetodo" onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations you won!!"}</h3>
        </div>
    )
}