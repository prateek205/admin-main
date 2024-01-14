import "./newProduct.css"; 

const NewProduct = () => {
    return (
    <div className="newProduct">
        <div className="addProductTitle">New Product</div>
            <form className="addproductForm">
                <div className="addproductItem">
                    <label>Image</label>
                    <input type="file" id="file"/>
                </div>
                <div className="addproductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpod"/>
                </div>
                <div className="addproductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123"/>
                </div>
                <div className="addproductItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="none">None</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                    <button className="productButton">Create</button>
                </form>
            </div>
    )
};

export default NewProduct;