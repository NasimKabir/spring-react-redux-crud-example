import { CREATE_TUTORIAL, RETRIEVE_TUTORIALS,GET_TUTORIAL_ID,DELETE_TUTORIAL } from '../types/tutorialsTypes';
import TutorialsService from '../../services/TutorialsService';

export const createTutorial = (tutorial) => async (dispatch) => {
    try {
        const res = await TutorialsService.create(tutorial);

        dispatch({
            type: CREATE_TUTORIAL,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retriveTutorial=()=>
    async(dispatch)=>{
        try {
            const response=await TutorialsService.getAll();
            dispatch({
                type:RETRIEVE_TUTORIALS,
                payload:response.data
            })
        } catch (error) {
            console.log(error)
        }    
}

export const getTutorialById = (tutorialId) => async (dispatch) => {
    const response = await TutorialsService.get(tutorialId);
    console.log(response.data)
    dispatch({
        type: GET_TUTORIAL_ID,
        payload: response.data
    })
};


