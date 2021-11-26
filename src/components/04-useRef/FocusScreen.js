import { useRef } from "react";
import "../02-useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = (params) => {
    // document.querySelector("input").select();
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} type="text" className="form-control" placeholder="Su nombre" />
      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>
        focus
      </button>
    </div>
  );
};
