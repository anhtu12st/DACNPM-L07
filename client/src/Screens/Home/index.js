import "./styles.scss";

const Home = () => {
  return (
    <div className="HomeScreen">
      <div className="content">
        {Array(5)
          .fill(null)
          .map((_) => (
            <div></div>
          ))}
      </div>

      <div className="right-bar">
        {Array(5)
          .fill(null)
          .map((_) => (
            <div></div>
          ))}
      </div>
    </div>
  );
};

export default Home;
