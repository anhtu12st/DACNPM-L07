const Trending = () => {
  return (
    <div className="Trending">
      {Array(5).fill(null).map((_) => (
        <div></div>
      ))}
    </div>
  );
};

export default Trending;
