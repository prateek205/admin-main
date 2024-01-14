import "./productList.css" 
import { DataGrid } from "@mui/x-data-grid";
import {DeleteOutline} from "@mui/icons-material"
import {ProductRows} from "../../dummyData"
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
    const [data, setData] = useState(ProductRows)

    const handleDelete =(id)=>{
        setData(data.filter(item=>item.id !== id));
      }

      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { 
            field: 'product', 
            headerName: 'Product', 
            width: 200, 
            renderCell:(params)=>{
                return (
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt=""/>
                    {params.row.name}
                </div>
          )
        }
    },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 100,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 170,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params)=>{
            return(
              <>
              <Link to={"/product/"+params.row.id}>
              <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </>
            )
          }
        }
      ];
    return (
        <div className="productList">
            <DataGrid
            rows={data}
            disableRowSelectionOnClick
            columns={columns}
            initialState={{
            pagination: {
            paginationModel: { page: 0, pageSize: 5 },
            },
         }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
    />
        </div>
    ) 
};

export default ProductList;