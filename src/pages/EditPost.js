import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Box, TextField, CircularProgress } from "@mui/material";
import { updatePost } from "../store/postsSlice";

const EditPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      // If no post is found, redirect to home
      navigate("/");
    }
  }, [post, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ id, title, content }));
    navigate("/");
  };

  if (!post) {
    return <CircularProgress className="mx-auto my-6" />;
  }

  return (
    <Box className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          className="bg-white shadow-md rounded-lg"
        />
        <TextField
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          className="bg-white shadow-md rounded-lg"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Update Post
        </Button>
      </form>
    </Box>
  );
};

export default EditPost;
