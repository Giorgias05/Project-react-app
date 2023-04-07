import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  
  return (
    <div className="text-center my-4">
      <h2>404 -Pagina non trovata</h2>
      <p>
        La risorsa richiesta non esiste. <Link to="/">Ops! Torna indietro.</Link>.
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Torna indietro
      </button>
    </div>
  );
};

export default NotFound;
