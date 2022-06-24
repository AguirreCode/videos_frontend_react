import { ChangeEvent, useState } from "react";
import { Password } from "../interfaces/User";
import { changePassword } from "../services/User";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [password, setPassword] = useState<Password>({
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  const [shownOne, setShownOne] = useState(false);

  const [shownTwo, setShownTwo] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await changePassword(password);
    if (res.user) {
      toast.success("Contraseña actualizada", {
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

  const handlePasswordOne = () => setShownOne(!shownOne);

  const handlePasswordTwo = () => setShownTwo(!shownTwo);

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center ">
            <div className="card-header">
              <h4>Cambiar Contraseña</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 d-flex align-items-center">
                  <input
                    type={shownOne ? "text" : "password"}
                    name="password"
                    placeholder="Contraseña"
                    className="form-control"
                    onChange={handleInputChange}
                    autoFocus={true}
                  />
                  <input
                    className="form-check-input ms-2 mb-2"
                    type="checkbox"
                    onClick={handlePasswordOne}
                  />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <input
                    type={shownTwo ? "text" : "password"}
                    name="confirm_password"
                    placeholder="Confirmar contraseña"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                  <input
                    className="form-check-input ms-2 mb-2"
                    type="checkbox"
                    onClick={handlePasswordTwo}
                  />
                </div>
                <div className="form-group mb-3">
                  <button className="btn btn-success btn-block">Cambiar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
