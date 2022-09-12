import image from '../assets/placeholder.png'

import {
    gql,
    useShopQuery,
    useServerAnalytics,
    useRouteParams,
    ShopifyAnalyticsConstants,
    Seo,
    fetchSync,  
    CacheLong,
    Money,
} from "@shopify/hydrogen";

import { Suspense } from "react";      
import Collection from '../routes/collections/[handle].server';

export default function CardExampleShow() {

    const {
        data: { products },
    } = useShopQuery({
        query: PRODUCT_QUERY,
        cache: CacheLong(),
    });

  return (
    
    <div className="flex flex-wrap min-h-screen w-full bg-gray-50 content-center justify-center py-10">
      <div className="flex ">
        {/* Left Side */}
        <div className="flex flex-wrap content-center justify-center  bg-white w-8/12">
          <div className="w-72 text-center">
            <p className="text-yellow-600 font-bold uppercase">BIJ AANKOOP VAN EEN TAS | OP=OP</p>
            <h1 className="text-2xl font-semibold">Cadeau van Pip</h1>
            {/* Dynamic product image */}
            <img className='mt-6' src={products.nodes[1].variants.edges[0].node.image.url} alt="" />
            {/* Dynamic product title */}
            {/* {console.log(products.nodes[0].variants.edges[0].node.priceV2.amount)} */}
            <h1 key={products.id} className="text-xl">{products.nodes[1].title}</h1>
            <h1 className="text-gray-400 uppercase ">{products.nodes[1].variants.edges[0].node.priceV2.amount}</h1><span>{products.nodes[0].variants.edges[0].node.priceV2.currencyCode}</span><br></br>
            {/* Dynamic product price */}
            <button className='uppercase hover:ease-in bg-cyan-900 hover:bg-cyan-800 p-3 w-full text-white'>shop nu</button>
          </div>
        </div>
        {/* Rightside */}
        <div className="flex flex-wrap content-center justify-center rounded-r-md">
            {/* Placeholder for dynamic image or static */}
          <img className=" bg-center bg-no-repeat bg-cover min-h-full" src={image}></img>
        </div>
      </div>
    </div>
  )
}

const PRODUCT_QUERY = gql`
  query ProductInfo {
    shop {
        name
        description
    }
    products(first: 2) {
        nodes {
            id
            title
            variants(first: 2) {
              edges {
                node {
                  priceV2 {
                    amount
                    currencyCode
                  }
                  image {
                    url
                  }
                }
              }
            }
        }
    }
  }
`



