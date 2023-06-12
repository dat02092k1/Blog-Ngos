const { cloudinary } = require("../upload/cloudinary.js");

async function uploadImageToCloudinary(imagePath) {
    try {
      const result = await cloudinary.uploader.upload(imagePath, {
        folder: 'File_img_CVHT_UET'
      });
      console.log('Image uploaded to Cloudinary:', result);
      return result.secure_url;
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      return null;
    }
  }
  
async function deleteImageFromCloudinary(publicId) {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      console.log('Image deleted from Cloudinary:', result);
      return true;
    } catch (error) {
      console.error('Error deleting image from Cloudinary:', error);
      return false;
    }
  }

  module.exports = {
    uploadImageToCloudinary, deleteImageFromCloudinary  
};