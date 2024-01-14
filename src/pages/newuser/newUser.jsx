import "./newUser.css"

const NewUser = () => {
    return( 
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserFormItem">
                <label>Username:</label>
                <input type="text" placeholder="John"/>
             </div>
            <div className="newUserFormItem">
                <label>Full Name:</label>
                <input type="text" placeholder="John Smith"/>
             </div>
            <div className="newUserFormItem">
                <label>Email:</label>
                <input type="email" placeholder="John@gmail.com"/>
             </div>
            <div className="newUserFormItem">
                <label>Password:</label>
                <input type="password" placeholder="password"/>
             </div>
            <div className="newUserFormItem">
                <label>Phone:</label>
                <input type="text" placeholder="+1 123 456 789"/>
             </div>
            <div className="newUserFormItem">
                <label>Address:</label>
                <input type="text" placeholder="New York | USA"/>
             </div>
            <div className="newUserFormItem">
                <label>Gender:</label>
                <div className="newUserGender">
                <input type="radio" name="gender" id="Male" value="male"/>
                <label for="male">Male</label>
                <input type="radio" name="gender" id="Female" value="Female"/>
                <label for="female">Female</label>
                <input type="radio" name="gender" id="Others" value="Other"/>
                <label for="other">Other</label>
                </div>
             <button className="newUserButton">Create</button>
             </div>
             <div className="newUserFormItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="none">None</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
             </div>
        </form>
    </div>
    )
};


export default NewUser;