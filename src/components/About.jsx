import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src="./images/about.jpeg"
            className="about-photo"
            alt="stunning beach view"
          />
        </div>

        <article className="about-info">
          <h3>Explore the Difference</h3>
          <p>
            At Backroads, we believe travel is more than just visiting new
            places—it's about creating life-changing experiences. Whether you're
            seeking adventure, relaxation, or cultural immersion, we craft tours
            that go beyond the ordinary.
          </p>
          <p>
            With personalized itineraries, expert guides, and a passion for
            unique destinations, we make sure every journey is unforgettable.
            Join us and see the world through a new lens, where every moment is
            a chance to explore and connect.
          </p>
          <a href="#about" className="btn">
            Read More
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
