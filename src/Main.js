import React from "react";
import "./duplicate"
import Product from "./duplicate";
function Main() {
    let Prod = {
        id:1,
        name:'samsung',
        amount:15000,
        offeramount:12999
    }
    return(
        <Product id ={Prod.id} name = {Prod.name} amount = {Prod.amount} offeramount = {Prod.offeramount} />
    )
}
export default Main