import { useEffect, useState } from "react";
import { allPost } from "../services/Post";
import { IUPost } from "../interfaces/Post";
import Post from "./Post";
import ReactLoading from "react-loading";

export default function Posts() {
  const [posts, setPosts] = useState<IUPost[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const res = await allPost();
      setPosts(res.all);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    getPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <ReactLoading width={100} height={100} type="spin" color="#0693E3" />
      </div>
    );
  }

  return (
    <div className="row">
      {posts.map((post: IUPost) => {
        return <Post {...post} key={post._id} />;
      })}
    </div>
  );
}
