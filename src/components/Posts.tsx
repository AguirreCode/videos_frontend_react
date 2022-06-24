import { useEffect, useState } from "react";
import { allPost } from "../services/Post";
import { IUPost } from "../interfaces/Post";
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState<IUPost[]>([]);

  const getAll = async () => {
    const response = await allPost();
    setPosts(response);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="row">
      {posts.map((post: IUPost) => {
        return (
         <Post {...post} key={post._id}/>
        );
      })}
    </div>
  );
};

export default Posts;
