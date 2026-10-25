# Post Dashboard

A small React app built with Vite that loads posts from the JSONPlaceholder API,
shows loading, error and empty states, and lets the user filter posts by title.

## File Organization

- `src/main.jsx`: entry point, renders the App component.
- `src/App.jsx`: root component. Owns the async state with `useReducer`, fetches
  posts in `useEffect` on mount (with a cleanup flag), keeps the filter value in
  `useState`, derives the filtered posts during render, and shows the loading,
  error and empty states.
- `src/api/postsApi.js`: `fetchPosts` function that only fetches and returns JSON.
  No React and no JSX.
- `src/reducer/postsReducer.js`: initial state and a pure reducer handling
  `FETCH_START`, `FETCH_SUCCESS` and `FETCH_ERROR`.
- `src/components/PostList.jsx`: renders posts with `.map()` and `id` as the key.
- `src/components/Post.jsx`: presentational component that shows title and body.
- `src/components/FilterForm.jsx`: controlled input for filtering by title.

## Challenges I Faced

1. **Understanding the reducer.** A reducer must be a pure function that returns
   a new state object instead of mutating the old one, and async logic must stay
   in `App`, not in the reducer.

2. **Avoiding memory leaks in useEffect.** I used a `cancelled` flag and a cleanup
   function so the state is not updated after the component unmounts.

3. **Derived state.** The filtered posts are computed during render from the
   source posts and the filter value, instead of being stored in state or
   updated in an effect.

4. **Handling fetch errors.** `fetch` does not throw on 404 or 500, so I check
   `response.ok` and throw an error myself, then catch it with `try/catch`.

5. **Working in small commits.** I built the project step by step (API, reducer,
   components, App, states and filter) and tested each part before committing.

## Run

```bash
npm install
npm run dev
```