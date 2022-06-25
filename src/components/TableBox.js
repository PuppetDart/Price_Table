import SubTable from "./SubTable"
import objArr from "../data";

export default function TableBox(props) {

    let grpObj = {};
    function groupBy(arr, property) {

        for (let i = 0; i < arr.length; i++) {

            var currentCateg = arr[i][property]

            if (!grpObj[currentCateg]) {
                grpObj[currentCateg] = []
            }
            grpObj[currentCateg].push(arr[i])
        }
    }
    groupBy(objArr, "category")

    return (
        <div className="table">
            <SubTable
                searchText={props.searchText}
                checkStatus={props.checkStatus}
                arr={grpObj.Fruits}
            />
            <SubTable
                searchText={props.searchText}
                checkStatus={props.checkStatus}
                arr={grpObj.Vegetables}
            />
        </div>
    );
}