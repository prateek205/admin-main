import "./widgetlg.css";

const WidgetLg = () => {

    const Button = ({type}) =>{
        return <button className={"widgetlgButton " + type}>{type}</button>
    }
    return (
    <div className="widgetLg">
        <h3 className="widgetlgTitle">Latest Transaction</h3>
        <table className="widgetTable">
            <tr className="widgetTr">
                <th className="widgetTh">Customer</th>
                <th className="widgetTh">Date</th>
                <th className="widgetTh">Amount</th>
                <th className="widgetTh">Status</th>
            </tr>
            <tr className="widgetTrItem">
                <td className="widgetTdUser">
                    <img className="widgetImg" 
                    src="https://cdn-icons-png.flaticon.com/128/149/149071.png" 
                    alt=""
                    />
                    <span className="widgetUserName">Susan Carol</span>
                </td>
                <td className="widgetlgDate">02/June/2023</td>
                <td className="widgetlgAmount">$ 2,145</td>
                <td className="widgetlgStatus">
                <Button type="Approved"/>
                </td>
            </tr>
            <tr className="widgetTrItem">
                <td className="widgetTdUser">
                    <img className="widgetImg" 
                    src="https://cdn-icons-png.flaticon.com/128/149/149071.png" 
                    alt=""
                    />
                    <span className="widgetUserName">Susan Carol</span>
                </td>
                <td className="widgetlgDate">02/June/2023</td>
                <td className="widgetlgAmount">$ 2,145</td>
                <td className="widgetlgStatus"><Button type="Approved"/></td>
            </tr>
            <tr className="widgetTrItem">
                <td className="widgetTdUser">
                    <img className="widgetImg" 
                    src="https://cdn-icons-png.flaticon.com/128/149/149071.png" 
                    alt=""
                    />
                    <span className="widgetUserName">Susan Carol</span>
                </td>
                <td className="widgetlgDate">02/June/2023</td>
                <td className="widgetlgAmount">$ 2,145</td>
                <td className="widgetlgStatus"><Button type="Decline"/></td>
            </tr>
            <tr className="widgetTrItem">
                <td className="widgetTdUser">
                    <img className="widgetImg" 
                    src="https://cdn-icons-png.flaticon.com/128/149/149071.png" 
                    alt=""
                    />
                    <span className="widgetUserName">Susan Carol</span>
                </td>
                <td className="widgetlgDate">02/June/2023</td>
                <td className="widgetlgAmount">$ 2,145</td>
                <td className="widgetlgStatus"><Button type="Pending"/></td>
            </tr>
            <tr className="widgetTrItem">
                <td className="widgetTdUser">
                    <img className="widgetImg" 
                    src="https://cdn-icons-png.flaticon.com/128/149/149071.png" 
                    alt=""
                    />
                    <span className="widgetUserName">Susan Carol</span>
                </td>
                <td className="widgetlgDate">02/June/2023</td>
                <td className="widgetlgAmount">$ 2,145</td>
                <td className="widgetlgStatus"><Button type="Pending"/></td>
            </tr>
        </table>
    </div>
    )
};

export default WidgetLg;