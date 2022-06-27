import React from "react";
import { IUPost } from "../interfaces/Post";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

export default function Post(post: IUPost) {
  return (
    <div className="col-md-4 mt-3">
      <div className="card">
        <h5 className="card-header">{post.title}</h5>
        <div className="card-body">
          <h5 className="card-title">{post.description}</h5>
          <ReactPlayer url={post.url}  width="100%"/>
          <div className="mt-3 d-grid gap-2">
          <Link to="/edit-post" className="btn btn-primary">
            Actualizar
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
