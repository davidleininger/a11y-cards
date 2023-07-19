import "./StoryCard.css";
import PropTypes from "prop-types";

function StoryCard({ as: Element, type, headingLevel, ...props }) {
  const Heading = headingLevel ? `h${headingLevel}` : "p";

  return (
    <Element className={`story ${type} ${!headingLevel ? "no-heading" : ""}`}>
      <div className="card">
        <div className="card-content">
          {headingLevel &&
            <Heading className="title heading">
              <a href="/2023/04/03/sports/ncaabasketball/uconn-wins-championship.html">
                UConn Wins Fifth N.C.A.A. Title
              </a>
            </Heading>}
          <p className="title text">
            <a href="/2023/04/03/sports/ncaabasketball/uconn-wins-championship.html">
              UConn Wins Fifth N.C.A.A. Title
            </a>
          </p>

          <div className="thumbnail">
            <img
              width="75"
              height="75"
              src="https://static01.nyt.com/images/2023/05/03/multimedia/03mcbb-final-gamer-tqhv/03mcbb-final-gamer-tqhv-thumbLarge.jpg"
              alt="UConn celebrates winning fifth N.C.A.A. Title"
            />
          </div>

          <p className="summary">
            UConn’s decicive 76-59 victory ended a dominant tournament run in
            which it won every game by double figures.
          </p>
          <p className="byline">
            <span>April 4, 2023</span> <span className="bullet"> </span> By
            Billy Witz
          </p>
        </div>

        <figure className="hero" role="group">
          <div>
            <img
              src="https://static01.nyt.com/images/2023/05/03/multimedia/03mcbb-final-gamer-tqhv/03mcbb-final-gamer-tqhv-threeByTwoMediumAt2X.jpg"
              srcSet="https://static01.nyt.com/images/2023/05/03/multimedia/03mcbb-final-gamer-tqhv/03mcbb-final-gamer-tqhv-threeByTwoMediumAt2X.jpg 1500w"
              alt="UConn celebrates winning fifth N.C.A.A. Title"
            />
          </div>
          <figcaption>
            <p className="byline">
              <span className="visually-hidden">Credit </span>David J.
              Phillip/Associated Press
            </p>
          </figcaption>
        </figure>
      </div>
    </Element>
  );
}

StoryCard.propTypes = {
  as: PropTypes.elementType,
  headingLevel: PropTypes.oneOf([2, 3, 4, 5, 6, null]),
  type: PropTypes.oneOf(["default", "featured", "support"])
};

StoryCard.defaultProps = {
  as: "article",
  headingLevel: null
};

export default StoryCard;
