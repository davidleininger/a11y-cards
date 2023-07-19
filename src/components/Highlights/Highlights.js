import { useRef, useEffect } from "react";
import "./Highlights.css";
import StoryCard from "../StoryCard";

function Highlights() {
  const col1Ref = useRef();
  const col2Ref = useRef();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      col1Ref.current.setAttribute(
        "data-size",
        col1Ref.current.clientWidth - 32
      );
      col2Ref.current.setAttribute(
        "data-size",
        col2Ref.current.clientWidth - 32
      );
    });

    observer.observe(col1Ref.current);
    observer.observe(col2Ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hl-wrapper">
      <h2 className="visually-hidden">Highlights</h2>
      <div ref={col1Ref} className="col col1">
        <StoryCard type="featured" headingLevel={3} />
      </div>
      <div ref={col2Ref} className="col col2">
        {/* No redundant rules makes sense, but role list is needed if you set list-style: none; */}
        {/* eslint-disable-next-line */}
        <ul role="list">
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
