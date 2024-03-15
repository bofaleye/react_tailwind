import { useEffect, useState } from "react"
import { fetchCustomerBill } from "../service/customerService"

const Table =()=>{
    const [accountNumber, setAccountNumber] = useState('759539241');
    const [customerBillInfo, setCustomerBillInfo] = useState(null);
    useEffect(()=>{
       const response = fetchCustomerBill(accountNumber);
       if(response?.data){
        setCustomerBillInfo(response?.data);
       }
    },[accountNumber])
    return(<div>
        <h3>Customer Information</h3>
           <section>
            <h4>Payment details</h4>
            {customerBillInfo &&<div>
                 <div>{customerBillInfo["Payment details"]["Current Outstanding balance"]}</div>
                 <div>{customerBillInfo["Payment details"]["Last Payment Date"]}</div>
                 <div>{customerBillInfo["Payment details"]["Last Payment Amount"]}</div>
                 <div>{customerBillInfo["Payment details"]["SLT type"]}</div>
                 <div>{customerBillInfo["Payment details"]["Constract Status"]}</div>
              </div>}
           </section>
    </div>)
}
export default Table