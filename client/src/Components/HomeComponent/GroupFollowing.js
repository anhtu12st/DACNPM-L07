import "./GroupFollowing.scss"
const GroupFollowing = (props) => {
    var groupFollowingData = [
        {
            "id": 1,
            "avatar": "",
            "name": "Nhóm C++"
        },
        {
            "id": 2,
            "avatar": "",
            "name": "Nhóm Java"
        },
        {
            "id": 3,
            "avatar": "",
            "name": "Nhóm Python"
        },
        {
            "id": 4,
            "avatar": "",
            "name": "Nhóm Swift"
        }
    ]

    return (
        <div className="GroupFollowing">
            <div className="Title">Nhóm theo dõi</div>
            <div className="ListGroup">
            {(groupFollowingData.length > 0) && groupFollowingData.map((group) => 
                <div className="group">
                    <img src={group.avatar}></img>
                    <div className="group-name">{group.name}</div>
                </div>
            )}
            </div>
        </div>
    )
}

export default GroupFollowing;