import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../actions/productsActions"
import Loader from "./layouts/Loader"
import MetaData from "./layouts/MetaData"
import Product from "./product/Product"
import { toast } from 'react-toastify'

export default function Home() {
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.productsState)

    useEffect(() => {
        if (error) {
            return toast.error(error, {
                position: toast.POSITION.TOP_CENTER
            })
        }

        dispatch(getProducts)
    }, [error])

    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={'Buy Best products'} />
                    <section id="products" className="container mt-5">
                        <div className="row">
                            {
                                products && products.map(product => (
                                    <Product product={product} />
                                ))
                            }
                        </div>
                    </section>
                </Fragment>
            }
        </Fragment>

    )
}