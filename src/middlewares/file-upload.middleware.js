// 1. Import multer.
import multer from 'multer';
import path from 'path'
const __dirname = path.resolve();
// 2. Configure storage with filename and location.

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(
            null,
            new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
        );
    },
});

export const upload = multer({
    storage: storage,
});
