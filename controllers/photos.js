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
            next( { message: 'That filetype isn\'t allowed'}, false);
        } 
    } 
}

// set middleware and tell it to deal with single "photo" field
exports.upload = multer(multerOptions).fields([{name: 'photo', maxCount: 1}, {name: 'avatar', maxCount: 1}]);

exports.resize = async (req, res, next) => {
    try {
        // if there is no file to resize
        if (!req.files) {
            next(); // skip to next middleware
            return;
        }
        const resizedPhotosPromises = Object.keys(req.files).map(key => {
            const file = req.files[key][0];
            const extension = file.mimetype.split('/')[1];
            req.body[key] = `${uuid.v4()}.${extension}`;
            // resize photo
            switch(key) {
                case 'photo': {
                    return jimp.read(file.buffer)
                        .then(photo => photo.resize(360, jimp.AUTO))
                        .then(resizedPhoto => resizedPhoto.write(`./frontend/uploads/${req.body[key]}`))
                }
                case 'avatar': {
                    return jimp.read(file.buffer)
                        .then(photo => photo.resize(48, 48))
                        .then(resizedPhoto => resizedPhoto.write(`./frontend/uploads/avatars/${req.body[key]}`))
                }
        
            }
        });

        await Promise.all(resizedPhotosPromises);
        // go to next midleware once finished writing photo into our filesystem
        next();
    } catch(err) {
        next();
        console.log(err);
    }
    
}