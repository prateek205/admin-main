import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import "./home.css";
import { userdata } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/widgetLg";
import WidgetSm from "../../components/widgetSm/widgetSm";

const Home = () => {
    return (
    <div className="home">
    <FeaturedInfo/>
    <Chart data={userdata} title="User Analytics" grid datakey="Active User"/>
    <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
    </div>
    </div>
    )
};

export default Home;