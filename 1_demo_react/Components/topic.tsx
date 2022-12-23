import { Component, ReactNode } from "react";
import { useParams } from "react-router-dom";

const TopicWrap=()=>{
    const param=useParams();
    console.log("Is function props there-", param);
    return(
        <>
        <Topics param={param}/>
        </>
    )
}

export default TopicWrap;

export class Topics extends Component<any>{
    render(): ReactNode {
        console.log("Is class props there-",this.props)
        return(
            <>
            <p>Topics</p>
            </>
        )
    }
}
