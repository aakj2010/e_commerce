import axios from 'axios'
import { productFail, productRequest, productSuccess } from '../slices/productSlice'

export const getProduct = id => async (dispatch) => {

    try {
        dispatch(productRequest())
        const { data } = await axios.get(`https://akj-ecommserver.onrender.com/api/v1/product/${id}`)
        dispatch(productSuccess(data))
    } catch (error) {
        // handle Error
        dispatch(productFail(error.response.data.message))
    }
}