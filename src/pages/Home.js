import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePost } from "../store/postsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <Box className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Posts</h2>
      <List className="space-y-4 mb-6">
        {posts.map((post) => (
          <ListItem
            key={post.id}
            button
            component={Link}
            to={`/edit/${post.id}`}
            className="bg-white shadow-lg rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <ListItemText
              primary={
                <span className="font-semibold text-lg">{post.title}</span>
              }
              secondary={<span className="text-gray-700">{post.content}</span>}
              className="w-full"
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(post.id)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <div className="mt-6 flex justify-center">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Create Post
        </Button>
      </div>
    </Box>
  );
};

export default Home;
