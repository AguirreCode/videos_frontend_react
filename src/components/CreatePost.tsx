import { useState, ChangeEvent } from "react";
import { IUPost } from "../interfaces/Post";
import { createPost } from "../services/Post";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [post, setPost] = useState<IUPost>({
    title: "",
    description: "",
    url: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createPost(post);
    console.log(res);
    if (res.post) {
      toast.success("Nuevo video agregado", {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`${res.error}`, {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    navigate("/all-posts");
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center ">
            <div className="card-header">
              <h4>Create Post</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 d-flex align-items-center">
                  <i className="fa-solid fa-user me-2" />
                  <input
                    type="text"
                    name="title"
                    placeholder="Titulo"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <i className="fa-solid fa-user me-2" />
                  <input
                    type="url"
                    name="url"
                    placeholder="Enlace"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <i className="fa-solid fa-user me-2" />
                  <textarea
                    name="description"
                    placeholder="Descripcion"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <button className="btn btn-success btn-block">Crear</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
