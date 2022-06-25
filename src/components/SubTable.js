export default function SubTable(props) {

    let j=0;
    let tableRows = props.arr.map(arrItem => {
        j++

        const regex= new RegExp(".*"+props.searchText.toLowerCase()+".*")

        //if checkBox.checked ===false, then render all items
        if(!props.checkStatus && regex.test(arrItem.name.toLowerCase())){
            return (
                <tr key={j} className="tableRow">
                    {console.log(arrItem.stocked)}
                    <td className="tableCell name" style={{color:`${arrItem.stocked?"black":"red"}`}}>{arrItem.name}</td>
                    <td className="tableCell price">{arrItem.price}</td>
                </tr>
            )
        }

        else if(props.checkStatus && regex.test(arrItem.name.toLowerCase())){
            return (
                //if arrItem.stocked ===true
                arrItem.stocked &&
                <tr key={j} className="tableRow">
                    {console.log(arrItem.stocked)}
                    <td className="tableCell name" style={{color:`${arrItem.stocked?"black":"red"}`}}>{arrItem.name}</td>
                    <td className="tableCell price">{arrItem.price}</td>
                </tr>
            )
        }
        else{
            return null
        }
    }
    );

    return (
        <div className="subTable_wTitle">  
            <h1 className="tableTitle">{props.arr[0].category}</h1>
            <table className="subTable">
                <tbody>
                {tableRows}
                </tbody>
            </table>
        </div>
    );
}