import multer from 'multer';
import path from 'path';

const __dirname = path.resolve();
//Image upload Api Part
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = path.join(__dirname, '/frontend/public/images');
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'video/gif' ||
    file.mimetype === 'video/mp4' ||
    file.mimetype === 'video/wmv' ||
    file.mimetype === 'video/avi' ||
    file.mimetype === 'video/webm' ||
    file.mimetype === 'video/mkv'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
  fileFilter: fileFilter,
});

export { upload };
