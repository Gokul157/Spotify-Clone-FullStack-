import { v2 as cloudinary } from 'cloudinary';
import albumModel from '../models/albumModel.js';
import mongoose from 'mongoose';

const addAlbum = async (req, res) => {
  try {
    const { name, desc, bgcolor } = req.body;
    const imageFile = req.file;

    if (!name || !desc || !bgcolor || !imageFile) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Upload image to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgcolor,
      image: imageUpload.secure_url,
    };

    console.log(name, desc, bgcolor, imageUpload.secure_url);

    const album = new albumModel(albumData);
    await album.save();

    res.json({ success: true, message: "Album added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const listAlbum = async (req,res)=>{
      try{
        const allAlbums = await albumModel.find({});
        res.json({success:true,albums:allAlbums});
      }catch(error){
        res.json({success:false});
      }
}

const removeAlbum = async(req,res)=>{
  try{
    await albumModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Album removed"})
  }catch(error){
    res.json({success:false});
  }
}

export {addAlbum,listAlbum,removeAlbum}
