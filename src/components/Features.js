import featuresItems from "./FeaturesItems";

const Features = () => {
  return (
    <section className="features">
      <div className="features-heading">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <ul className="features-items">
        {featuresItems.map((item) => (
          <li>
            <img src={item.src} alt="online" />
            <h4>{item.text}</h4>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
