import "./topbar.css";
import {NotificationsNone ,Language ,Settings} from '@mui/icons-material';

const TopBar = () => {
    return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topbarLeft">
                <span className="logo">Prateek Admin</span>
            </div>
            <div className="topbarRight">
                <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Language/>
                </div>
                <div className="topbarIconContainer">
                <Settings/>
                </div>
                <img className="topAvatar" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPqRqst2VMs6VV5I95EaqNNZ0rOWMkQpHDg&usqp=CAU" 
                alt=""/>
            </div>
        </div>      
    </div>
    )
};


export default TopBar;