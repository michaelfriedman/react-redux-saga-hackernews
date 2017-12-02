import React from "react";
import "./App.css";
import Stories from "./Stories";
import { STORY_ARCHIVE } from "../constants/actionTypes";
import store from "../store";

export default () => (
  <div className="app">
    <Stories />
  </div>
);
