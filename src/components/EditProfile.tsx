import { ChangeEvent, useEffect, useState } from "react";
import { getUser, editUser } from "../services/User";
import { userRegister } from "../interfaces/User";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [user, setUser] = useState<userRegister>({
    name: "",
    first_lastname: "",
    second_lastname: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    getUserBack();
  }, []);

  const getUserBack = async () => {
    const response = await getUser();
    setUser(response);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await editUser(user);
    if (res.user) {
      toast.success("Datos actualizados", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(res.error, {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    navigate("/profile");
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center ">
            <div className="card-header">
              <h4>Actualizar mis datos</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 d-flex align-items-center">
                  <i className="fa-solid fa-user me-2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="form-control"
                    defaultValue={user.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <i className="fa-solid fa-user me-2" />
                  <input
                    type="text"
                    name="first_lastname"
                    placeholder="Primer Apellido"
                    className="form-control"
                    defaultValue={user.first_lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <i className="fa-solid fa-user me-2" />
                  <input
                    type="text"
                    name="second_lastname"
                    placeholder="Segundo Apellido"
                    className="form-control"
                    defaultValue={user.second_lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <i className="fa-solid fa-user me-2" />
                  <input
                    type="text"
                    name="email"
                    placeholder="Correo"
                    className="form-control"
                    defaultValue={user.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <Link
                    to="/change-password"
                    className="text-decoration-none text-primary"
                  >
                    Cambiar mi contraseña
                  </Link>
                </div>
                <div className="form-group mt-3">
                  <button className="btn btn-success btn-block">
                    Actualizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
