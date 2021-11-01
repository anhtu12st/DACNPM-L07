import "./GroupTrending.scss";
const GroupTrending = (props) => {
    var groupTredingData = [
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
        }
    ]

    return (
        <div className="GroupTrending">
            <div className="Title">Nhóm thinh hành</div>
            <div className="ListGroup">
            {(groupTredingData.length > 0) && groupTredingData.map((group) => 
                <div className="group">
                    <img src={group.avatar}></img>
                    <div className="group-name">{group.name}</div>
                </div>
            )}
            </div>
        </div>
    )
}

export default GroupTrending;