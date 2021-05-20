import {ProfileContext} from './ProfileContext';
import {useProfile} from './useProfile';

const ProfileLayout = ({children}) => {
    const {user} = useProfile();

    return (
        <ProfileContext.Provider value={{
            user
        }}>
            {children}
        </ProfileContext.Provider>
    );
};

export {
    ProfileLayout
};
