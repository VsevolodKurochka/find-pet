import {Controller, Post, Req, Res} from '@nestjs/common';
import {ImagesService} from './images.service';

@Controller('images')
export class ImagesController {
    constructor(private imagesService: ImagesService) {
    }
    @Post('/upload')
    async upload(@Req() request) {
        const result = await this.imagesService.uploadImage(request.body.image);
        return result;
    }
}
