import express from 'express';
import multer from 'multer';
import path from 'path';
import auth from '../Middleware/auth.js';
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost
} from '../Controllers/posts.js';

const router = express.Router();

// multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', auth, upload.single('image'), createPost);
router.put('/:id', auth, upload.single('image'), updatePost);
router.delete('/:id', auth, deletePost);

export default router;
