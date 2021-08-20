import { CREATE_TUTORIAL, RETRIEVE_TUTORIALS, GET_TUTORIAL_ID, DELETE_TUTORIAL, UPDATE_TUTORIAL }
    from "../../redux/types/tutorialsTypes";

const initialState = {
    tutorials: [],
    tutorial: {}
};
const TutorialsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TUTORIAL:
            return { ...state, state: payload };
        case RETRIEVE_TUTORIALS:
            return { ...state, tutorials: payload };
        case GET_TUTORIAL_ID:
            return { ...state, tutorial: payload };
        case DELETE_TUTORIAL:
            return { tutorials: state.tutorials.filter(({ id }) => id !== payload.id) };
        case UPDATE_TUTORIAL:
            return  { ...state, tutorial: payload };
        default:
            return state;
    }
}
export default TutorialsReducer;
