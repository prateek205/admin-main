import "./product.css"
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {productdata} from "../../dummyData";
import { Publish } from "@mui/icons-material";

const Product = () => {
    return ( 
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="newProduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productdata} datakey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img 
                    className="productInfoImg" 
                    src="https://static.vecteezy.com/system/resources/previews/026/782/383/original/apple-airpods-ai-generative-free-png.png" 
                    alt=""/>
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales</span>
                        <span className="productInfoValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Active</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in Stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name:</label>
                    <input type="text" placeholder="Apple Airpod"/>
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="none">None</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="none">None</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img 
                        src="https://static.vecteezy.com/system/resources/previews/026/782/383/original/apple-airpods-ai-generative-free-png.png" 
                        alt="" 
                        className="productImg"
                        />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
    )
};


export default Product;