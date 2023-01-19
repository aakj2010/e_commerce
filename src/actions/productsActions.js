import axios from 'axios';
import { productsFail, productsSuccess, productsRequest } from '../slices/productsSlice';

export const getProducts = (keyword, price, category, rating, currentPage) => async (dispatch) => {

    try {  
        dispatch(productsRequest())
        let link = `https://akj-ecommserver.onrender.com/api/v1/products?page=${currentPage}`;
        // let link = `http://localhost:8000/api/v1/products?page=${currentPage}`;
        
        if(keyword) {
            link += `&keyword=${keyword}`
        }
        if(price) {
            link += `&price[gte]=${price[0]}&price[lte]=${price[1]}`
        }
        if(category) {
            link += `&category=${category}`
        }
        if(rating) {
            link += `&ratings=${rating}`
        }
        
        const { data }  =  await axios.get(link);
        dispatch(productsSuccess(data))
    } catch (error) {
        //handle error
        dispatch(productsFail(error.response.data.message))
    }
    
}

// let link = `https://akj-ecommserver.onrender.com/api/v1/products?page=${currentPage}`;
// let link = `http://localhost:8000/api/v1/products?page=${currentPage}`;