import * as React from "react";
import { useTestStore} from "./useTestStore";

function SearchBar() {
    const { listData, callListApi } = useTestStore();

    // React.useEffect(() => {
    //     callListApi();
    // }, [callListApi]);

    const handleClick = () => {
        callListApi();
    };
    return (
        <div>
            <button onClick={handleClick}>Load List Data</button>
            {listData.map((item, index) => (
                <div key={index}>
                    <p>id: {item.id}</p>
                    <p>Email: {item.email}</p>
                    <p>Name: {item.name}</p>
                </div>
            ))}
        </div>
    );
}

export {SearchBar}