import { useRef, useEffect } from "react";
import "./App.css";
import StoryCard from "../StoryCard";

function App() {
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
    <div className="app">
      <h1>A11y Story Cards</h1>
      <div className="app-wrapper">
        <div ref={col1Ref} className="col col1">
          <StoryCard type="featured" headingLevel={2} />
        </div>
        <div ref={col2Ref} className="col col2">
          <h2 className="visually-hidden">More Stories</h2>
          {/* No redundant rules makes sense, but role list is needed if you set list-style: none; */}
          {/* eslint-disable-next-line */}
          <ul role="list">
            <StoryCard as="li" headingLevel={3} />
            <StoryCard as="li" headingLevel={3} />
            <StoryCard as="li" headingLevel={3} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
