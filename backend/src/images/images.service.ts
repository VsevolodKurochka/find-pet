import {Injectable, NotFoundException} from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2, UploadApiOptions } from 'cloudinary';

@Injectable()
export class ImagesService {

    async uploadImage(file: string, options?: UploadApiOptions): Promise<UploadApiResponse | UploadApiErrorResponse> {
        return v2.uploader.upload(file)
            .then((result) => result)
            .catch((error) => {
                throw new NotFoundException(error.error.code)
            });
    }
}
