import image from "./img4.png"

const ProfileCard=()=>{
    return(
        <>
        <div className="card bg-primary">
  <img src={image} className="card-img-top" alt="Profile Image"/>
  <div className="card-body">
    <h5 className="card-title">Tanaji Vitekar</h5>
    <p className="card-text">Somewadi,Solapur</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Bcs(Computer Science)</li>
    <li className="list-group-item">Passout Year-2021</li>
    <li className="list-group-item">Solapur University Solapur</li>
  </ul>
</div>
        </>
    )
}
export default ProfileCard;
