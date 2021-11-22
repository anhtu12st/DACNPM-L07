import { createContext, useContext, useEffect, useState } from 'react';
// import { verifyToken } from '../Services/User';

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [userState, setUserState] = useState({});

	const isAuthenticated = () => (!!userState.token);

	const setUserInfo = ({ token, userInfo }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setUserState({
      token,
      userInfo,
    });
	};
	
	const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setUserState({});
  };

	useEffect(() => {
    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};

    setUserState({
      token,
      userInfo,
    });

    // const verify = async () => {
    //   try {
    //     await verifyToken(userInfo.id);
    //   } catch (error) {
    //     logout();
    //   }
    // }

    // verify();

  }, []);

	return (
		<UserContext.Provider
			value={{
				isAuthenticated,
				userState,
				setUserState: (data) => setUserInfo(data),
				logout,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserProvider };
