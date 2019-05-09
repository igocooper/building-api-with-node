const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter(req, file, next) {
        isPhoto = file.mimetype.startsWith('image/');
        if (isPhoto) {
            next(null, true);
        } else {
            next( { message: 'Taht filetype isn\'t allowed'}, false);
        } 
    } 
}

// set middleware and tell it to deal with single "photo" field
exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {
    try {
        // if there is no file to resize
        if (!req.file) {
            next(); // skip to next middleware
            return;
        }
        console.log(req.file);

        const extension = req.file.mimetype.split('/')[1];
        req.body.photo = `${uuid.v4()}.${extension}`;
        // resize photo
        const photo = await jimp.read(req.file.buffer);
        await photo.resize(360, jimp.AUTO);
        await photo.write(`./frontend/uploads/${req.body.photo}`);
        // go to next midleware once finished writing photo into our filesystem
        next();
    } catch(err) {
        next();
        console.log(err);
    }
    
}