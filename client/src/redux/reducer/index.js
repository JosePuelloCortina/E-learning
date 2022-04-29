const initialState = {
  user: [],
  courses: [],
  coursesBackUp: [],
  courseDetail: [],
  categories: [],
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
    case "ALL_CATEGORIES":
      return {
        ...state,
        categories: action.payload.data,
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
      return {
        ...state,
        courses: action.payload,
      };
    case "GET_FILTER_FREE":
      const Coursesfiltered = action.payload;
      if (Coursesfiltered === "free") {
        return {
          ...state,
          coursesBackUp: state.courses.filter((course) => course.price === 0),
        };
      } else if (Coursesfiltered === "paid") {
        return {
          ...state,
          coursesBackUp: state.courses.filter((course) => course.price > 0),
        };
      }
      return {
        ...state,
        coursesBackUp: state.courses,
      };
    case "FILTER_CATEGORY": {
      let filteredCategories =
        action.payload === "all"
          ? state.courses
          : state.courses.filter((c) => {
              for (let i = 0; i < c.categories.length; i++) {
                if (Object.values(c.categories[i]).includes(action.payload)) {
                  return true;
                }
              }
            });
      return {
        ...state,
        coursesBackUp: filteredCategories,
      };
    }
    case "FILTER_BY_REVIEW":
      const reviews = state.courses;
      const reviewFiltered =
        action.payload === "All"
          ? reviews
          : reviews.filter(
              (r) => r.review <= action.payload && r.review > action.payload - 1
            );
      return {
        ...state,
        coursesBackUp: reviewFiltered,
      };

    default:
      return state;
  }
}
