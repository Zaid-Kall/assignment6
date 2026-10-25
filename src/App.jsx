import { useEffect, useReducer } from "react";
import { fetchPosts } from "./api/postsApi";
import { postsReducer, initialState } from "./reducer/postsReducer";
import PostList from "./components/PostList";

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fetchPosts();
        if (!cancelled) {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
      } catch (err) {
        if (!cancelled) {
          dispatch({ type: "FETCH_ERROR", payload: err.message });
        }
      }
    }

    loadPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Post Dashboard</h1>
      <PostList posts={state.posts} />
    </div>
  );
}

export default App;