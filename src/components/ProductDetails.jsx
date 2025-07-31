import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(()=>{

        const productDetails = async() =>{
            try{
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setProduct(response.data);
            }
            catch(err){
                console.log(err.message);
            }
        };
        productDetails();

    },[id])

    console.log(product);

    if(!product) return <div>Loading...</div>

    return (
        <div>

            <div className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Product Image */}
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={product.image}
                            alt="Model wearing tee"
                            className="w-full h-full object-cover aspect-[4/5] transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                            <p className="text-2xl text-indigo-600 mt-1 font-semibold">${product.price}</p>
                            <div className="flex items-center space-x-2 text-sm mt-2">
                                <span className="text-yellow-400 text-lg">★★★★☆</span>
                                <span className="text-gray-500">{product.rating.rate} ·</span>
                                <a href="#" className="text-indigo-600 hover:underline">See all {product.rating.count} reviews</a>
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        {/* Color Picker */}
                        <div>
                            <h3 className="text-sm text-gray-700 font-medium mb-2">Choose Color</h3>
                            <div className="flex space-x-3">
                                <button
                                    className="h-8 w-8 rounded-full bg-gray-900 ring-2 ring-indigo-600 hover:ring-offset-2"
                                    aria-label="Black"
                                />
                                <button
                                    className="h-8 w-8 rounded-full bg-gray-400 ring-2 ring-gray-300 hover:ring-indigo-500 hover:ring-offset-2"
                                    aria-label="Gray"
                                />
                            </div>
                        </div>

                        {/* Sizes */}
                        <div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm text-gray-700 font-medium">Select Size</h3>
                                <a href="#" className="text-sm text-indigo-600 hover:underline">Size Guide</a>
                            </div>
                            <div className="grid grid-cols-6 gap-2 mt-3">
                                {["XXS", "XS", "S", "M", "L", "XL"].map((size, i) => (
                                    <button
                                        key={i}
                                        className={`border rounded-md px-2.5 py-1.5 text-sm font-medium transition 
                ${size === "XXS"
                                                ? "bg-indigo-600 text-white"
                                                : size === "XL"
                                                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                                                    : "hover:border-indigo-600 hover:text-indigo-600"
                                            }`}
                                        disabled={size === "XL"}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div>
                            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium text-sm shadow hover:from-indigo-700 hover:to-purple-700 transition">
                                Add to Cart
                            </button>
                        </div>

                        <hr className="border-gray-200" />

                        {/* Description */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">Product Description</h4>
                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                The Basic tee is a new take on a classic, made with super soft pre-shrunk cotton for a comfortable and consistent fit. Each tee is hand cut and sewn with care, and the special dye technique gives it a unique finish.
                            </p>
                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                               {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductDetails