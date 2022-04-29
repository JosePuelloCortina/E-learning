const initialState = {
  user: [],
  courses: [],
  courseDetail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_USERS":
      return {
        ...state,
        user: action.payload,
      };

    case "POST_USER":
      return {
        ...state,
      };

      case "VALIDATE_USER":
      return {
        ...state,
      };

    case "ALL_COURSES":
      return {
        ...state,
        courses: action.payload,
      };
    case "GET_USER_BY_ID":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_COURSES_BY_ID":
      return {
        ...state,
        courseDetail: action.payload,
      };
    case "REMOVE_COURSE_DETAIL":
      return {
        ...state,
        courseDetail: [],
      };
    case "GET_SEARCH_COURSE":
      return{
        ...state,
        courses:action.payload,
      }
    default:
      return state;
  }
}
