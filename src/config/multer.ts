import crypto from 'crypto';
import multer from 'multer';

import {extname, resolve} from 'path';

export default {
    upload(folder: string){
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileName = `${crypto.randomBytes(16).toString('hex')} - ${extname(file.originalname)}`;
                    return callback(null, fileName);
                }
            })
        }
    }
}