

import { useEffect, useReducer } from "react";

const initialState = {
  users: [],
  loading: false,
  error: null
};

const ACTIONS = {
  API_REQUESTS: "api-request",
  POST_DATA: "post-data",
  ERROR: "error"
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.API_REQUESTS:
      return { ...state, users: [], loading: true };
    case ACTIONS.POST_DATA:
      return { ...state, users: payload.data, loading: false };
    case ACTIONS.ERROR:
      return { ...state, users: [], error: payload };
    default:
      return state;
  }
}

function usePost(url, value) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUESTS });
    fetch(url, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(value)
      })
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.error });
      });
  }, [url, value]);
  return state;
}

export default usePost;
