import LatestArticlesItems from "./LatestArticlesItems";

const LatestArticles = () => {
  return (
    <section className="latest-articles">
      <h1>Latest Articles</h1>

      <div className="latest-articles-collection">
        {LatestArticlesItems.map((item) => (
          <div className="latest-articles-item">
            <img src={item.src} alt="currency" />
            <div className="content">
              <label>{item.label}</label>
              <h4>{item.text}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
