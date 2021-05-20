import {ProfileContext} from './ProfileContext';
import {useProfile} from './useProfile';

const ProfileLayout = ({children}) => {
    const {user, setUser} = useProfile();

    return (
        <ProfileContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </ProfileContext.Provider>
    );
};

export {
    ProfileLayout
};
