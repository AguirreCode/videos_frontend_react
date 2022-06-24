import { useEffect, useState } from "react";
import { userRegister } from "../interfaces/User";
import { getUser } from "../services/User";
import { Link } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState<userRegister>({
    name: "",
    first_lastname: "",
    second_lastname: "",
    email: ""
  });

  useEffect(() => {
    getUserBack();
  }, []);

  const getUserBack = async () => {
    const response = await getUser();
    setUser(response);
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="col-md-5 mt-3">
    <div className="card">
      <h4 className="card-header">Mi Perfil</h4>
      <div className="card-body">
        <h5 className="card-title">Nombre: &nbsp; &nbsp; {user.name}</h5>
        <h5 className="card-text">Apellido: &nbsp; &nbsp; {user.first_lastname} {user.second_lastname}</h5>
        <h5 className="card-text">Correo: &nbsp; &nbsp; {user.email}</h5>
        <Link to="/edit-profile" className="btn btn-primary mt-3">
          Actualizar perfil
        </Link>
      </div>
    </div>
  </div>
    </div>
  );
}
