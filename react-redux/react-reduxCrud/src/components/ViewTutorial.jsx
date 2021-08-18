import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTutorialById } from "../redux/action/TutorialsAction";
import { useParams } from "react-router";

const ViewTutorial = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const tutorialInfo = useSelector(state => state.tutorials.tutorial)
  console.log("Tutorial", tutorialInfo)

  const { title, description, published } = tutorialInfo;

  useEffect(() => {
    dispatch(getTutorialById(id));
  }, []);

  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <h2>{published ? "true" : "false"}</h2>
    </div>
  )
}

export default ViewTutorial;
