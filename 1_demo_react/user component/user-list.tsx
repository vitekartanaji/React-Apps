import UserCard from "./user-card";

export interface UserType{
      login:string;
      id:number;
      node_id:string;
      avatar_url:string;
      gravatar_id:string;
      url:string;
      html_url:string;
      followers_url:string;
      following_url:string;
      gists_url:string;
      starred_url:string;
      subscriptions_url:string;
      organizations_url:string;
      repos_url:string;
      events_url:string;
      received_events_url:string;
      type:string;
      site_admin: boolean;
}

const UserList=(props:{UserInfo:UserType[]})=>{
    let {UserInfo:Users}=props;
    return(
        <>
        <div>
      <div>
        <div>
          <h2 className='text-center'>User-List</h2>
        </div>
      </div>
      <div className="row">
        {Users.map((UserType) => {
          return <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12"  key={UserType.id}><UserCard {...UserType} /></div>
        }
        )};
      </div>
    </div>
        </>
    )
}

export default UserList;
