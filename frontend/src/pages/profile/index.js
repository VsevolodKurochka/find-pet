import {LayoutPage} from '../../Layout';
import {ProfileLayout} from './ProfileLayout';
import ProfileHome from './ProfileHome';

const ProfilePage = () => {
    return (
        <LayoutPage>
            <ProfileLayout>
                <ProfileHome />
            </ProfileLayout>
        </LayoutPage>
    );
};

export default ProfilePage;
