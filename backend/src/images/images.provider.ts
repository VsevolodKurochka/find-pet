import { v2 } from 'cloudinary';

export const CloudinaryProvider = {
    provide: 'Cloudinary',
    useFactory: (): void => {
        return v2.config({
            cloud_name: 'ddoqypz54',
            api_key: '553898344919167',
            api_secret: 'KtHE7RClumXvGtZDIqDL0ISIh_I',
        });
    },
};