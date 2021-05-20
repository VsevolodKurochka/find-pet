import {LayoutPage} from '../../../Layout';
import {ProfileLayout} from '../ProfileLayout';
import ProfileAddAnimal from './AddAnimal';

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
