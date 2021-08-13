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