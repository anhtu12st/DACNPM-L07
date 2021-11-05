
const GroupRule = () => {
    var moreInfo = {
        member: 356,
        date: "10/8/2021"
    }
    var rules = [
        "Tôn trọng các thành viên khác trong Group.",
        "Nghiêm cấm mọi hành vi phá hoại Group dưới mọi hình thức.",
        "Hành vi coi thường, lăng mạ, vu khống thành viên khác sẽ có thể bị treo nick ngay lập tức.",
        "Khi tham gia làm thành viên, bạn bắt buộc đọc và đồng ý với mọi quy định của Group.",
        "Không gây sự, cãi nhau, chửi nhau gây mất trật tự nhóm."
    ]
    return (
        <div className="MoreInfo">
            <div className="bonus">
                <div className = "content">
                    {moreInfo.member} thành viên <br/>
                    Nhóm được tạo ngày {moreInfo.date}
                </div>
            </div>
            <div className="rule">
                <ol className="title">
                    Nội quy
                    {rules.length > 0 && rules.map(rule => (
                        <li>
                            {rule}
                        </li>
                    ))}
                </ol>

            </div>
            <div className="FAQ">
                <div className="title">Câu hỏi thường gặp</div>
            </div>
        </div>
    );
}
export default GroupRule;