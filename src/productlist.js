import {useContext} from "react";
import {Link} from "react-router-dom";
import ProductContext from "./productcontext";

export default function ProductList() {
    let Products =useContext(ProductContext)
    return <>
<h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>

                            <Link to ="productcreate">Add Product</Link>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product details</th>
                                <th>Price</th>
                                <th>product purchase date</th>
                                <th>product Expire date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                        <tr>
                                <th>Product Name</th>
                                <th>Product details</th>
                                <th>Price</th>
                                <th>product purchase date</th>
                                <th>product Expire date</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                Products.productList.map((obj)=>{
                                    return<>
                                    <tr>
                                <td>{obj.ProductName}</td>
                                <td>{obj.Productdetails}</td>
                                <td>{obj.Price}</td>
                                <td>{obj.Productpurchase}</td>
                                <td>{obj.Productex}</td>
                                <td>
                                    <Link to ="productedit/1">Edit</Link>
                                </td>
                            </tr>
                                    </>
                                })
                            }
                            <tr>
                                <td>Product 1</td>
                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</td>
                                <td>20$</td>
                                <td>2020/04/25</td>
                                <td>2021/11/25</td>
                                <td>
                                    <Link to ="productedit/1">Edit</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Product 2</td>
                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</td>
                                <td>22$</td>
                                <td>2020/04/25</td>
                                <td>2021/11/25</td>
                                <td>
                                    <Link to ="productedit/2">Edit</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
}