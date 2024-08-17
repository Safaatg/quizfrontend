function ProfileItem(props){
    return (
        <div id="chat">
        <div id="online">
            <img src={props.ProfileImg}/>
            <h3>{props.ProfileName}</h3>
        </div>
        <div id="circle"></div>
        
    </div>
    )
}
export default ProfileItem