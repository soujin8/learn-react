import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const dataFetchReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}

const useDataApi = (initialUrl: any, initialData: any) => {
  const [url, setUrl] = useState(
    initialUrl
  )
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_INIT'})

      try {
        const result = await axios(url);
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})
      } catch(error) {
        dispatch({type: 'FETCH_FAILURE'})
      }
    };

    fetchData();
  }, [url]);

  return [state, setUrl]
}

const DataFetch: React.FC = () => {
  const [query, setQuery] = useState("redux");
  const [state, setUrl] = useDataApi(
   'http://hn.algolia.com/api/v1/search?query=redux',
   { hits: [] }
  )

  return (
    <>
      <form
        onSubmit={event => {
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
          event.preventDefault()
        }}
      >
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">
        Search
      </button>
      </form>

      {state.isError && <div>Something went wrong ...</div>}

      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
      <ul>
        {state.data.hits.map((item: any) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      )}
    </>
  );
};

export default DataFetch;
