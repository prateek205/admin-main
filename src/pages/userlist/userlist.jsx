import "./userlist.css"
import { DataGrid } from "@mui/x-data-grid";
import {DeleteOutline} from "@mui/icons-material"
import {UserRows} from "../../dummyData"
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
    const [data, setData] = useState(UserRows)

    const handleDelete =(id)=>{
      setData(data.filter(item=>item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'UserName', width: 200, renderCell:(params)=>{
          return (
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt=""/>
              {params.row.username}
            </div>
          )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 100,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 170,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params)=>{
            return(
              <>
              <Link to={"/users/"+params.row.id}>
              <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </>
            )
          }
        }
      ];
      
    return (
    <div className="userList">
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

export default UserList;