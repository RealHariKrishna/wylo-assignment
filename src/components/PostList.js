import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box } from "@mui/material";
import { deletePost } from "../store/postsSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <Box className="space-y-4">
      {posts.map((post) => (
        <Box key={post.id} className="p-4 border rounded-md">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
          <Box className="space-x-2 mt-2">
            <Link to={{ pathname: `/edit/${post.id}`, state: { post } }}>
              <Button variant="outlined">Edit</Button>
            </Link>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PostList;
