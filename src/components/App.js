import React from "react";
import "./App.css";
import Stories from "./Stories";
import { STORY_ARCHIVE } from "../constants/actionTypes";
import store from "../store";

export default ({ stories, onArchive }) => (
  <div className="app">
    <Stories
      stories={stories}
      onArchive={objectID => store.dispatch({ type: STORY_ARCHIVE, objectID })}
    />
  </div>
);
