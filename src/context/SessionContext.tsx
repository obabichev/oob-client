import React, {useContext, useState} from 'react';
import {Maybe, User} from '../types';

interface UserContextApi {
    user: Maybe<User>;
    setUser: (user: Maybe<User>) => void
}

const SessionContext = React.createContext<UserContextApi>({user: null, setUser: () => null});

export const SessionProvider: React.FunctionComponent<{}> = ({children}) => {
    const [user, setUser] = useState<Maybe<User>>(null);

    return <SessionContext.Provider value={{user, setUser}}>
        {children}
    </SessionContext.Provider>
};

export const useSession = () => {
    const {user, setUser} = useContext(SessionContext);
    return [user, setUser] as [typeof user, typeof setUser];
};

// export const useAutorized = () => {
//     const {user} = useContext(SessionContext);
//
//     return !!user;
// };
