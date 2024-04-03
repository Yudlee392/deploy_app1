const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/StudentController');

const { upload, bucket,admin ,getCachedViewLink} = require('../config/firebase');

router.get('/submission/create', studentController.getSubmissionForm);

router.post('/submission/create', 
    upload.fields([{ name: 'image', maxCount: 1 }, { name: 'document', maxCount: 1 }]),
        studentController.submitFormData);

router.get('/submission/view',studentController.getAllSubmissions)


// Set up Multer for file uploads
// router.post('/submission/create', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'document', maxCount: 1 }]), async (req, res) => {
//     try {
//       const { image, document } = req.files;
  
//       // Check if both files are uploaded
//       if (!image || !document) {
//         return res.status(400).json({ message: 'Both image and document files are required' });
//       }
  
//       // Handle image file
//       const imageFileName = Date.now() + image[0].originalname;
//       const imageFileRef = bucket.file(imageFileName);
  
//       await imageFileRef.save(image[0].buffer, {
//         metadata: { contentType: image[0].mimetype }
//       });
  
//       // Handle document file
//       const documentFileName = Date.now() + document[0].originalname;
//       const documentFileRef = bucket.file(documentFileName);
  
//       await documentFileRef.save(document[0].buffer, {
//         metadata: { contentType: document[0].mimetype }
//       });
  
//       const imagePath = `${imageFileName}`;
//       const documentPath = `${documentFileName}`;
      
//       const viewLinkImage = await getCachedViewLink(imagePath);
//       const viewLinkDocument = await getCachedViewLink(documentPath);

//       return res.json({ viewLinkImage, viewLinkDocument,imagePath ,documentPath});
//     } catch (error) {
//       console.error('Error uploading files:', error);
//       return res.status(500).json({ error: 'Something went wrong' });
//     }
//   });

module.exports = router;
