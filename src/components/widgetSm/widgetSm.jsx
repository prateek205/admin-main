import "./widgetsm.css"; 
import {Visibility} from "@mui/icons-material";

const WidgetSm = () => {
    return( 
    <div className="widgetSm">
        <span className="widgetsmTitle"> New Join Members </span>
        <ul className="widgetsmList">
            <li className="widgetsmItem">
                <img className="widgetImg" 
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                alt=""/>
                <div className="widgetsmUser">
                    <span className="widgetUserName">Anna Keller</span>
                    <span className="widgetSmJobTitle">Software Engineer</span>
                </div>
                <button className="widgetsmButton">
                <Visibility className="widgetsmIcon"/>
                Display
                </button>
            </li>
        </ul>
        <ul className="widgetsmList">
            <li className="widgetsmItem">
                <img className="widgetImg" 
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                alt=""/>
                <div className="widgetsmUser">
                    <span className="widgetUserName">Anna Keller</span>
                    <span className="widgetSmJobTitle">Software Engineer</span>
                </div>
                <button className="widgetsmButton">
                <Visibility className="widgetsmIcon" />
                Display
                </button>
            </li>
        </ul>
        <ul className="widgetsmList">
            <li className="widgetsmItem">
                <img className="widgetImg" 
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                alt=""/>
                <div className="widgetsmUser">
                    <span className="widgetUserName">Anna Keller</span>
                    <span className="widgetSmJobTitle">Software Engineer</span>
                </div>
                <button className="widgetsmButton">
                <Visibility className="widgetsmIcon"/>
                Display
                </button>
            </li>
        </ul>
        <ul className="widgetsmList">
            <li className="widgetsmItem">
                <img className="widgetImg" 
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                alt=""/>
                <div className="widgetsmUser">
                    <span className="widgetUserName">Anna Keller</span>
                    <span className="widgetSmJobTitle">Software Engineer</span>
                </div>
                <button className="widgetsmButton">
                <Visibility className="widgetsmIcon"/>
                Display
                </button>
            </li>
        </ul>
        <ul className="widgetsmList">
            <li className="widgetsmItem">
                <img className="widgetImg" 
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                alt=""/>
                <div className="widgetsmUser">
                    <span className="widgetUserName">Anna Keller</span>
                    <span className="widgetSmJobTitle">Software Engineer</span>
                </div>
                <button className="widgetsmButton">
                <Visibility className="widgetsmIcon"/>
                Display
                </button>
            </li>
        </ul>
    </div>
    )
};

export default WidgetSm;