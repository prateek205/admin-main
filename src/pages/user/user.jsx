import { Link } from "react-router-dom";
import "./user.css"; 
import {PermIdentity ,CalendarToday ,Phone ,Email ,Place ,Publish} from "@mui/icons-material";

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="editUser">Edit User</h1>
                <Link to="newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" 
                        alt="" 
                        className="userImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername"> Anna Becker </span>
                            <span className="userShowJobTitle"> Software Engineer </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowContainer">
                    <PermIdentity className="userShowIcon"/>
                    <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowContainer">
                    <CalendarToday className="userShowIcon"/>
                    <span className="userShowInfoTitle">20.11.1991</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowContainer">
                    <Phone className="userShowIcon"/>
                    <span className="userShowInfoTitle">+1 123 456 789</span>
                    </div>
                    <div className="userShowContainer">
                    <Email className="userShowIcon"/>
                    <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowContainer">
                    <Place className="userShowIcon"/>
                    <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm" action="">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username:</label>
                                <input 
                                type="text" 
                                placeholder="annnbeck99" 
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name:</label>
                                <input 
                                type="text" 
                                placeholder="Anna Becker" 
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Mobile No.:</label>
                                <input 
                                type="text" 
                                placeholder="+1 123 456 789" 
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email Id.:</label>
                                <input 
                                type="text" 
                                placeholder="annnbeck99@gmail.com" 
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address:</label>
                                <input 
                                type="text" 
                                placeholder="New York | USA" 
                                className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                            <img 
                            src="https://cdn-icons-png.flaticon.com/128/149/149071.png" 
                            alt="" 
                            className="userUpdateImg"
                            />   
                            <label htmlFor="file"><Publish className="userUpdateIcon"/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                            </div> 
                            <button className="userUploadButton">Update</button>    
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) 
};


export default User;