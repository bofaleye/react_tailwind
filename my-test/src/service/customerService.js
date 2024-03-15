import axios from 'axios';


const BaseUrl = "https://bps-bm-staging.azurewebsites.net/api/"  //process.env.REACT_APP_BASE_URL;

export const fetchCustomerBill =(accountOrMeterNumber)=>{
    let url = `${BaseUrl}customer/customerBillInfoRetrieval?accOrMeterNo=${accountOrMeterNumber}`
    axios.get(url, {
        headers : { Authorization:  'Bearer ef37ba73-5fd8-4cbb-ac4f-3481f3881938',}
    }).then(response =>{
        return response;
    }).catch(error =>{
        console.log(error);
    })
}