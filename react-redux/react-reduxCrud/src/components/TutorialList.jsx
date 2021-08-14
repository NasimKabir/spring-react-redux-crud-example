import React, { useEffect } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { retriveTutorial } from '../redux/action/TutorialsAction';

const TutorialList = () => {

  const tutorials = useSelector(state => state.tutorials);

  const dispatch = useDispatch();

  console.log(tutorials)

  useEffect(() => {
    dispatch(retriveTutorial())
  }, [])

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
          {tutorials.map((tutorial, index) => (
            <tr>
              <td key={index}> {tutorial.id}</td>
              <td>{tutorial.title}</td>
              <td> {tutorial.description}</td>
              <td> {tutorial.published? "Published" : "Pending"}</td>
              <td>
                <button><span className="edit"><i class="fas fa-edit" ></i></span></button>
                <button><span className="delete"><i class="fas fa-trash"></i></span></button></td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div >
  )
}

export default TutorialList
