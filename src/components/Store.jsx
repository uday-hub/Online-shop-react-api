import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Store = () => {

    const [product_data, setProduct_Data] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");

                // filter for men and woman cloths only
                const filterData = response.data.filter(item => item.category === "men's clothing" || item.category === "women's clothing");

                setProduct_Data(filterData);
            }
            catch (err) {
                console.log(err.message);
            }
        }
        fetchProducts();
    }, []);

    console.log(product_data);

    return (
        <div>
            <div className="container mx-auto px-4 py-4">
                <div className='heading-section py-10 mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-1'>
                    <h1 className="text-2xl font-bold">Best Selling Products</h1>
                </div>
                <div className='cards-section'>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-1">

                            <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>

                                {
                                    product_data.map((item) => (
                                        <Link to={`/product/${item.id}/details`}  className='group' key={item.id}>
                                            <img src={item.image} className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" alt="img_here" />
                                            <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
                                        </Link>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Store