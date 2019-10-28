const initialState = {
  githubList: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const github = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GITHUB_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_GITHUB_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_GITHUB_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        githubList: action.payload.data.items,
      };
    case 'POST_GITHUB_FULFILLED':
      state.githubList.push (action.payload.data.result);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        githubList: state.githubList,
      };
    case 'PATCH_GITHUB_FULFILLED':
      const dataAfterPatch = state.githubList.map (github => {
        if (github.id === action.payload.data.result.id) {
          return action.payload.data.result;
        }
        return github;
      });
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        githubList: dataAfterPatch,
      };
    case 'DELETE_GITHUB_FULFILLED':
      const dataAfterDelete = state.githubList.filter (
        github => github.id !== action.payload.data.result.id
      );
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        githubList: dataAfterDelete,
      };
    default:
      return state;
  }
};

export default github;
