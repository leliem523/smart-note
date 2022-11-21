const { Post } = require("../models");
const { getJsonFormater } = require("../configs");

const postController = {
  getAllPost: async (req, res) => {
    try {
      const post = await Post.find();
      const jsonFormater = getJsonFormater(
        post,
        "Lấy thông tin post thành công!",
        true
      );
      return res.status(200).json(jsonFormater);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getDetail: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        const jsonFormater = getJsonFormater(
          post,
          "Post không tồn tại!!",
          false
        );
        return res.status(404).json(jsonFormater);
      }
      const jsonFormater = getJsonFormater(
        post,
        "Lấy thông tin chi tiết post thành công!",
        true
      );
      return res.status(200).json(jsonFormater);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  addPost: async (req, res) => {
    try {
      const newPost = new Post(req.body);
      const saveNewPost = await newPost.save();
      const jsonFormater = getJsonFormater(
        saveNewPost,
        "Lấy thông tin chi tiết post thành công!",
        true
      );
      return res.status(200).json(jsonFormater);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updatePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        const jsonFormater = getJsonFormater(
          post,
          "Post không tồn tại!!!",
          false
        );
        return res.status(404).json(jsonFormater);
      }
      Object.assign(post, req.body);
      const updatePost = await post.save();
      const jsonFormater = getJsonFormater(
        updatePost,
        "Cập nhật post thành công!",
        true
      );
      return res.status(200).json(jsonFormater);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deletePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        const jsonFormater = getJsonFormater(
          post,
          "Post không tồn tại!!!",
          false
        );
        return res.status(404).json(jsonFormater);
      }
      const deletePost = await post.delete();
      const jsonFormater = getJsonFormater(
        deletePost,
        "Xóa post thành công!",
        true
      );
      return res.status(200).json(jsonFormater);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = postController;
