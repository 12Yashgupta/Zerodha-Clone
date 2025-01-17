import React from "react";
import {holdings} from "../data/data";
function Holdings(){
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>
      <div className="order-table">
         <table>
            <tr>
               <th>Instrument</th>
               <th>Qty.</th>
               <th>Avg. cost</th>
               <th>LTP</th>
               <th>Cur. val</th>
               <th>P&L</th>
               <th>Net chg.</th>
               <th>Day chg.</th>
            </tr>
            {holdings.map((stock,index)=>{
               const currVal=stock.price*stock.qty;
               const isProfit=currVal-stock.avg*stock.qty>=0.0;
               const profClass=isProfit?"profit":"loss";
               const dayClass=stock.isLoss?"loss":"profit";
               return (
                <tr key={index}  >
               <td>{stock.name}</td>
               <td>{stock.qty}</td>
               <td>{stock.avg.toFixed(2)}</td>
               <td>{stock.price.toFixed(2)}</td>
               <td>{currVal.toFixed(2)}</td>
               <td className="prodClass">
                {(currVal-stock.avg*stock.qty).toFixed(2)}
               </td>
               <td className={profClass}>{stock.net}</td>
               <td className={dayClass}>{stock.day}</td>
                 </tr>
               )
            })}
         </table>
      </div>
    </>
  )
}
export default Holdings;