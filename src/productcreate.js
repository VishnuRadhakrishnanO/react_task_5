import { useContext, useState } from 'react';
import {Link} from "react-router-dom";
import ProductContext from './productcontext';

export default function ProductCreate(){
    let ProductData = useContext(ProductContext)
    let [ProductName, setProductName] = useState("")
    let [Productdetails, setProductdetails] = useState("")
    let [Price, setPrice] = useState("")
    let [Productpurchase, setProductpurchase] =useState("")
    let [Productex, setproductex] = useState("")


    let ProductSubmit = (e) => {
        e.preventDefault()
        ProductData.setproductList([...ProductData.productList,

            {
                ProductName,
              Productdetails,
              Price,
              Productpurchase,
              Productex
            }]

        )


    }



    return<>
<div className="container">

<form onSubmit={ProductSubmit}>
    <div className="row">
        <div className="col-lg-12">
            <h1>User Form</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-6">
            <label>ProductName</label>
            <input className="form-control" value={ProductName} onChange={(e) => setProductName(e.target.value)}></input>
        </div>

        <div className="col-lg-6">
            <label>Product Details</label>
            <input className="form-control" value={Productdetails} onChange={(e) => setProductdetails(e.target.value)}></input>

        </div>
    </div>

    <div className="row">
        <div className="col-lg-6">
            <label>Price</label>
            <input className="form-control" value={Price} onChange={(e) => setPrice(e.target.value)} ></input>
        </div>

        <div className="col-lg-6">
            <label>Product Purchase date</label>
            <input className="form-control" value={Productpurchase} onChange={(e) => setProductpurchase(e.target.value)}></input>
        </div>
        <div className="col-lg-6">
            <label>Product Expires on</label>
            <input className="form-control" value={Productex} onChange={(e) => setproductex(e.target.value)}></input>
        </div>
    </div>
    <div className="row mt-3">
        <div className="col-lg-6">
            <input className="btn btn-primary" type="submit" value="Submit"></input>
        </div>
    </div>
</form>
</div>
    </>
  
    return<>
    <h1>Product Create</h1>
    </>
}