import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Box, TextField } from "@mui/material";
import { addPost } from "../store/postsSlice";
import { useNavigate } from "react-router-dom";

const PostForm = ({ onSave }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, content }));
    if (onSave) {
      onSave();
    }
    navigate("/");
  };

  return (
    <Box>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Save Post
        </Button>
      </form>
    </Box>
  );
};

export default PostForm;
