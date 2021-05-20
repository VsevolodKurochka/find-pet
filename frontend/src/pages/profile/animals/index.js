import {LayoutPage} from '../../../Layout';
import {ProfileLayout} from '../ProfileLayout';
import ProfileAnimals from './Animals';

const ProfileAnimalsPage = () => {
    return (
        <LayoutPage>
            <ProfileLayout>
                <ProfileAnimals />
            </ProfileLayout>
        </LayoutPage>
    );
};

export default ProfileAnimalsPage;
