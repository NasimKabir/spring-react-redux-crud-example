import {CREATE_TUTORIAL}
    from "../../redux/types/tutorialsTypes";
const initialState = [];
const TutorialsReducer = (tutorials = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TUTORIAL:
            return {...tutorials,initialState: payload};
        
        default:
            return tutorials;
    }
}

export default TutorialsReducer;
