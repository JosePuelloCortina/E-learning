const initialState = {
  user: [],
  courses: [],
  coursesBackUp: [],
  courseDetail: [],
  filtersCourses: [],
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
        coursesBackUp: action.payload,
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
    case "GET_FILTER_FREE":
      const Coursesfiltered = action.payload
      if (Coursesfiltered === 'free') {
        return {
          ...state,
          courses: state.coursesBackUp.filter(
            (course) => course.price === 0
          ),
        };
      }  else if (Coursesfiltered === 'paid') {
        return {
          ...state,
          courses: state.coursesBackUp.filter(
            (course) => course.price > 0
          ),
        }; 
      }
      return{
        ...state,
        courses: state.coursesBackUp,
      }
    case "FILTER_BY_REVIEW":
      const reviews = state.coursesBackUp;
      const reviewFiltered = action.payload === 'All' ? reviews : reviews.filter(r => r.review <= action.payload && r.review > (action.payload - 1));
      return{
        ...state,
        courses: reviewFiltered
      }
    default:
      return state;
  }
}
