import "./featuredinfo.css";
import {South ,North} from "@mui/icons-material"
const FeaturedInfo = () => {
    return (
    <div className="featuredinfo">
    <div className="featureditem">
        <span className="featuredtitle">Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 4,415</span>
            <span className="featuredMoneyRate">
            - 11.4 <South className="featuredIcon negative"/>
            </span>
        </div>
        <span className="featuredSubtitle">Compared to Last Month</span>
    </div>
    <div className="featureditem">
        <span className="featuredtitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 4,450</span>
            <span className="featuredMoneyRate">
            -1.4 <South className="featuredIcon negative"/>
            </span>
        </div>
        <span className="featuredSubtitle">Compared to Last Month</span>
    </div>
    <div className="featureditem">
        <span className="featuredtitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 4,420</span>
            <span className="featuredMoneyRate">
            2.4 <North className="featuredIcon positive"/>
            </span>
        </div>
        <span className="featuredSubtitle">Compared to Last Month</span>
    </div>
    </div>
    )
};


export default FeaturedInfo;