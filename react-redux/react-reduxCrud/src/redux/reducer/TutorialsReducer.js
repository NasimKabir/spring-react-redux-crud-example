import { CREATE_TUTORIAL, RETRIEVE_TUTORIALS }
    from "../../redux/types/tutorialsTypes";
const initialState = [];
const TutorialsReducer = (tutorials = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TUTORIAL:
            return { ...tutorials, initialState: payload };
        case RETRIEVE_TUTORIALS:
            return  payload ;
        default:
            return tutorials;
    }
}

export default TutorialsReducer;
