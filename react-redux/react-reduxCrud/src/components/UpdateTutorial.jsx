import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutorialById, updateTutorial } from "../redux/action/TutorialsAction";
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';

const UpdateTutorial = () => {
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const tutorialInfo = useSelector(state => state.tutorials.tutorial)
    console.log("tutorialInfo", tutorialInfo)
    const initialTutorialState = {
        id: null,
        title: "",
        description: "",
        published: false
    };
    const [tutorial, setTutorial] = useState(initialTutorialState);

    useEffect(() => {
        dispatch(getTutorialById(id));
    }, [id]);

    useEffect(() => {
        if (tutorialInfo != null) {
            setTutorial({
                id: tutorialInfo.id,
                title: tutorialInfo.title,
                description: tutorialInfo.description,
                published: true
            });
        }

    }, [tutorialInfo]);

    const updateTutorials = (e) => {
        e.preventDefault();
        dispatch(updateTutorial(id, tutorial))
        history.push("/");
    }
    const handleInputChange = event => {
        const { name, value } = event.target;
        setTutorial({ ...tutorial, [name]: value });
    };
    return (
        <div className="submit-form">
            <div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        required
                        value={tutorial.title}
                        onChange={handleInputChange}
                        name="title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        required
                        value={tutorial.description}
                        onChange={handleInputChange}
                        name="description"
                    />
                </div>

                <button className="btn btn-success" onClick={updateTutorials}>
                    Update
                </button>
            </div>
        </div>
    )
}

export default UpdateTutorial
