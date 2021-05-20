import {LayoutPage} from '../../Layout';
import {ProfileLayout} from './ProfileLayout';
import ProfileAddAnimal from './ProfileAddAnimal';

const ProfileAddAnimalPage = () => {
    return (
        <LayoutPage>
            <ProfileLayout>
                <ProfileAddAnimal />
            </ProfileLayout>
        </LayoutPage>
    );
};

export default ProfileAddAnimalPage;
