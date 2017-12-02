import React from "react";
import "./App.css";
import Stories from "./Stories";

export default ({ stories, onArchive }) => (
  <div className="app">
    <Stories
      stories={stories}
      onArchive={objectID => {
        console.log(objectID);
      }}
    />
  </div>
);
