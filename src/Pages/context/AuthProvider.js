import React, { createContext } from 'react';
import useAuth from '../../hooks/useAuth';
import useCourses from '../../hooks/useCourses';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // hooks
  const AllContexts = useFirebase();
  const { courses } = useCourses();
  const Auth = useAuth();


  const data = {
    AllContexts,
    courses,
    Auth
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;