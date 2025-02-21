import express from 'express';
import multer from 'multer';
import { addAlbum, listAlbum, removeAlbum } from '../controllers/albumController.js';

const albumRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

albumRouter.post('/add', upload.single('image'), addAlbum);
albumRouter.get('/list', listAlbum);
albumRouter.post('/remove', removeAlbum);

export default albumRouter;
