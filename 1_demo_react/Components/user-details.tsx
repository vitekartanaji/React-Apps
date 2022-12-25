import { useParams } from "react-router-dom";
import UserPage from "./user-page";
import { UserType } from "./user-list";
import Users from "../Data/users.json"

const UserDetails=()=>{
    const {id} = useParams();
    let UserType:any|undefined;
    if(id)
    {
        UserType =Users.find(use=>use.id===parseInt(id));
    }
    console.log(UserType?.login);
    return(
        <>
        user! && <div><UserPage {...UserType}  key={id}/></div>
        </>
    )
}

export default UserDetails;
