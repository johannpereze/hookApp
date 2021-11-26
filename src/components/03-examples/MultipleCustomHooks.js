import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0];



  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Siguiente
      </button>
    </div>
  );
};
