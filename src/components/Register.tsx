import { ChangeEvent, useState } from "react";
import { userRegister } from "../interfaces/User";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/User";

export default function Register() {
  const [user, setUser] = useState<userRegister>({
    name: "",
    first_lastname: "",
    second_lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await registerUser(user);
    navigate("/login");
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center ">
            <div className="card-header">
              <h4>Registrarse</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 d-flex align-items-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <input
                    type="text"
                    name="first_lastname"
                    placeholder="Primer Apellido"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <input
                    type="text"
                    name="second_lastname"
                    placeholder="Segundo Apellido"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={handleInputChange}
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
                <div className="form-group mb-3 d-flex align-items-center">
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirmar contraseña"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <button className="btn btn-success btn-block">
                    Registrarme
                  </button>
                </div>
                <div className="form-group">
                  <a
                    href="/users/reseat-password"
                    className="text-decoration-none"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
