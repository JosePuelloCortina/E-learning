const initialState = {
  user: [],
  courses: [],
  coursesBackUp: [],
  courseDetail: [],
  categories: [],
  coursesfiltered: [],
};

function sortAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return 1;

    if (b[field] > a[field]) return -1;

    return 0;
  });
}

function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return -1;

    if (b[field] > a[field]) return 1;

    return 0;
  });
}

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
        coursesfiltered: action.payload,
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
          courses: state.coursesBackUp.filter((course) => course.price === 0),
          coursesfiltered: state.coursesBackUp.filter(
            (course) => course.price === 0
          ),
        };
      } else if (Coursesfiltered === "paid") {
        return {
          ...state,
          courses: state.coursesBackUp.filter((course) => course.price > 0),
          coursesfiltered: state.coursesBackUp.filter(
            (course) => course.price > 0
          ),
        };
      }
      return {
        ...state,
        courses: state.coursesBackUp,
      };
    case "FILTER_CATEGORY": {
      let filteredCategories =
        action.payload === "all"
          ? state.coursesBackUp
          : state.coursesBackUp.filter((c) => {
              for (let i = 0; i < c.categories.length; i++) {
                if (Object.values(c.categories[i]).includes(action.payload)) {
                  return true;
                }
              }
            });
      return {
        ...state,
        courses: filteredCategories,
        coursesfiltered: filteredCategories,
      };
    }
    case "FILTER_BY_REVIEW":
      let sortedReviewArr =
        action.payload === "asc"
          ? sortAsc(state.courses, "review")
          : sortDesc(state.courses, "review");
      return {
        ...state,
        courses: sortedReviewArr,
      };

    default:
      return state;
  }
}
