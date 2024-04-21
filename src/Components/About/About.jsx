import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
// eslint-disable-next-line react/prop-types
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leader Today</h2>
        <p>
          Embark on transformative education journey with our university a
          comprensive eductaion programs. Our cutting-edge curriculum is dsigned
          to empower students with the knowledge skills, and experience needed
          to excel in the dynamic filed of education.
        </p>
        <p>
          With a focus on innovation, hands-on learing, and personalized
          mentorship, our programs prepare aspiring educators to make meaningful
          impact in classrooms, school, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor,or
          educational leader, our diverse range of programs offers the perfect
          pathway to achive your goals and unlock your full potential in
          shapping the future of eduation.
        </p>
      </div>
    </div>
  );
};

export default About;
