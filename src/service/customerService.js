import axios from 'axios';


const Url = "https://mocki.io/v1/0be8ed02-30e2-4eee-94cc-8cf7dab0b7b4"  //process.env.REACT_APP_BASE_URL;

export const fetchCustomerBill = async () => {
    try {
        const response = await axios.get(Url);
        return response?.data;
    } catch (error) {
        throw error; // Re-throwing the error to propagate it to the calling component
    }
};