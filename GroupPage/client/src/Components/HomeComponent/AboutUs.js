import "./AboutUs.scss";
const AboutUs = (props) => {
    return (
        <div className="AboutUs">
            <div className="Title">Thông tin về chúng tôi</div>
            <div className="Content">{props.aboutUs}</div>
        </div>
    )
}   
export default AboutUs;