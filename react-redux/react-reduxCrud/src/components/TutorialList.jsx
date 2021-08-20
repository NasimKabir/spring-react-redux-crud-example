import React, { useEffect } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { retriveTutorial,deleteTutorialById } from '../redux/action/TutorialsAction';
import { Link } from "react-router-dom";

const TutorialList = () => {

  const tutorialList = useSelector(state => state.tutorials);

  const dispatch = useDispatch();

  console.log(tutorialList)

  useEffect(() => {
    dispatch(retriveTutorial())
  }, [])

  const removeTutorial = (id) => {
      dispatch(deleteTutorialById( id))
      .then(() => {
        dispatch(retriveTutorial())
      })
     
  };
  return (
    <div className="list row">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tittle</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tutorialList && tutorialList.tutorials.map((tutorial) => (
            <tr key={tutorial.id}>
              <td> {tutorial.id}</td>
              <td>{tutorial.title}</td>
              <td> {tutorial.description}</td>
              <td> {tutorial.published ? "Published" : "Pending"}</td>
              <td>
              <button  >
                <Link to={"/tutorial/" + tutorial.id} >
                  <span className="view"><i className="fas fa-eye"></i></span>
                </Link>
                </button>
                <button>
                <Link to={"/tutorials/" + tutorial.id} >
                  <span className="edit"><i className="fas fa-edit" ></i></span>
                </Link>
                </button>

                <button onClick={()=>{removeTutorial(tutorial.id)}}><span className="delete"><i className="fas fa-trash"></i></span></button></td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div >
  )
}

export default TutorialList