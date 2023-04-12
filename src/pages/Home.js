import { NavLink } from "react-router-dom";
import { Questions } from "./Questions";

export function Home() {
  return (
    <>
      <h1>Welcome John</h1>
      <NavLink to="/questions">Show Questions List</NavLink>
    </>
  );
}
