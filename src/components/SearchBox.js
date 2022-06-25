export default function SearchBox(props) {
    return (
        <div className="searchBox">
            <input
                type="text"
                className="searchInput"
                value={props.searchText}
                onChange={e => props.searchHandler(e.target.value)}
                placeholder="Search ..."
            />
            <input
                type="checkbox"
                checked={props.checkStatus}
                onClick={props.checkHandler}
                name="" id="searchFilter"
            />
            <label htmlFor="searchFilter">{props.cbLabel}</label>
        </div>
    );
}