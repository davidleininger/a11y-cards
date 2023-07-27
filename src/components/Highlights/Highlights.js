import "./Highlights.css";
import StoryCard from "../StoryCard";

function Highlights() {
  return (
    <div className="hl-wrapper">
      <h2 className="visually-hidden">Highlights</h2>
      <div>
        {/* No redundant rules makes sense, but role list is needed if you set list-style: none; */}
        {/* eslint-disable-next-line */}
        <ul role="list" className="hightlights">
          <StoryCard as="li" type="featured" headingLevel={3} />
          <StoryCard as="li" headingLevel={3} />
          <StoryCard as="li" headingLevel={3} />
          <StoryCard as="li" headingLevel={3} />
        </ul>
      </div>
      <h2 className="visually-hidden">More Stories</h2>
      {/* eslint-disable-next-line */}
      <ul role="list" className="support-list">
        <StoryCard as="li" type="support" headingLevel={3} />
        <StoryCard as="li" type="support" headingLevel={3} />
        <StoryCard as="li" type="support" headingLevel={3} />
        <StoryCard as="li" type="support" headingLevel={3} />
        <StoryCard as="li" type="support" headingLevel={3} />
      </ul>
      {/* eslint-disable-next-line */}
      <ul role="list" className="support-list">
        <StoryCard as="li" type="support" headingLevel={3} />
        <StoryCard as="li" type="support" headingLevel={3} />
        <StoryCard as="li" type="support" headingLevel={3} />
        <StoryCard as="li" type="support" headingLevel={3} />
        <StoryCard as="li" type="support" headingLevel={3} />
      </ul>
    </div>
  );
}

export default Highlights;
