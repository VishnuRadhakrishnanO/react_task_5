import {Link} from "react-router-dom";
export default function ProductEdit(props){

    return<>
    <h1>Product Edit {props.match.params.id}</h1>
    </>
}