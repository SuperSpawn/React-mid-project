import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: null
};

const ACTIONS = {
  API_REQUESTS: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error"
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.API_REQUESTS:
      return { ...state, users: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, users: payload.data, loading: false };
    case ACTIONS.ERROR:
      return { ...state, users: [], error: payload };
    default:
      return state;
  }
}

function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUESTS });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.error });
      });
  }, [url]);
  return state;
}

export default useFetch;
