import { CREATE_TUTORIAL, RETRIEVE_TUTORIALS, GET_TUTORIAL_ID, DELETE_TUTORIAL }
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
            return state.tutorials.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
}

/* 
        case DELETE_EMPLOYEE:
            return {...state, employees: state.employees.filter((employee) => employee.id !== payload)};

        case GET_EMPLOYEE_BY_ID:
            return {...state, employee: payload}; */


export default TutorialsReducer;
