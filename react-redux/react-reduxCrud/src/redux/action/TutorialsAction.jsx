import { CREATE_TUTORIAL, RETRIEVE_TUTORIALS } from '../types/tutorialsTypes';
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