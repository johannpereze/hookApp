import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {

  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote} = !!data && data[0];



  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote">
        <p className="mb-2">{quote}</p>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente
      </button>
    </div>
  );
};
