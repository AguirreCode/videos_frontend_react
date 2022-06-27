import { ChangeEvent, useState } from "react";
import { loginUser } from "../services/User";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  changeState(): void;
}

export function Login(props: Props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await loginUser(user);
    if (res.token) {
      toast.success(`Bienvenido al sistema ${res.user.name}`, {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem("token", res.token);
      props.changeState();
      navigate("/all-posts");
    } else {
      toast.error(`${res.error}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center ">
            <div className="card-header">
              <h4>Inicio de Sesión</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 d-flex align-items-center">
                  <input
                    type="text"
                    name="email"
                    placeholder="Usuario"
                    className="form-control"
                    onChange={handleInputChange}
                    autoFocus={true}
                  />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <button className="btn btn-success btn-block">
                    Iniciar Sesión
                  </button>
                </div>
                <div className="form-group">
                  <Link to="/reseat-password" className="text-decoration-none">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
