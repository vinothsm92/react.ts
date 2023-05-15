import { memo } from "react";
import Application from "../comp/comp";

function Resource() {
    return ( <Application pgName='resources'></Application> );
}

export default memo(Resource);