import css from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <span>
            Hi beeb, <br /> I'm Adku
          </span>
          <span>
            Front End developer <br /> and MERN stack student
          </span>
        </div>

        <div className={css.profile}>
          <img src="./slide.png" alt="profile" />
        </div>

        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">1</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="./certificate.png" alt="certificate" />
            <span>CERTIFICATE PROFATIONAL</span>
            <span>FULLSTACK DEVELOPER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
