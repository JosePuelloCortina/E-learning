const initialState = {
  user: [],
  userDetail: {},
  courses: [],
  coursesBackUp: [],
  courseDetail: [],
  categories: [],
  coursesfiltered: [],
  loggedUsers: [],
  token: {},
  classes: [],
  classDetail: [],
  avatares:[],

  reviews: [],

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

      case "POST_COURSE":
        return {
          ...state,
        };

        case "POST_CLASS":
        return {
          ...state,
        };

    case "VALIDATE_USER":
      return {
        ...state,
        token: action.payload,
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        token: {},
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
        userDetail: action.payload,
      };
    case "GET_COURSES_BY_ID":
      return {
        ...state,
        courseDetail: action.payload,
      };

      case "GET_CLASS_BY_ID":
        return {
          ...state,
          classDetail: action.payload,
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
    case "FILTER_CATEGORY":
      if (action.payload.length !== 0) {
        const selectedCategories = action.payload;
        const filterCategories = state.coursesBackUp.filter((course) => {
          return selectedCategories.every((i) =>
            course.categories.map((category) => category.name).includes(i)
          );
        });
        return {
          ...state,
          courses: filterCategories,
          coursesfiltered: filterCategories,
        };
      } else {
        return {
          ...state,
          courses: state.coursesBackUp,
          coursesfiltered: state.coursesBackUp,
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
    case "ADD_LOGGED_USER":
      return {
        ...state,
        loggedUsers: action.payload,
      };
    case "REMOVE_LOGGED_USER":
      return {
        ...state,
        loggedUsers: [],
      };
    case "GET_ALL_CLASSES":
      return {
        ...state,
        classes: action.payload,
      };

    case "GET_AVATARES":
      return {
        ...state,
        avatares: action.payload,
      };

       case "POST_REVIEW":
      return {
        ...state,
      };
      case "GET_ALL_REVIEWS":
        return {
          ...state,
          reviews: action.payload,
        };


        case "EDIT_COURSES_BY_ID":
        return {
          ...state,
          courseDetail: action.payload
        };


    default:
      return state;
  }
}


