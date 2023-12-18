// import multer from 'multer'

// const storage = multer.diskStorage({
//     // destination: (req, file, cb) => {
//     //   cb(null, "public/images");
//     // },
//     filename: (req, file, cb) => {
//       cb(null, req.body.name); 
//     },
//   });
// const upload = multer({ storage: storage });


// module.exports = upload;

// multer.js
import multer from 'multer';

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    },
});


const upload = multer({ storage: storage });

export { upload };
