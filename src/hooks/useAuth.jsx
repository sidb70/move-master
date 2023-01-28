import {useState, useEffect, useContext, createContext, ReactNode,} from 'react';
import auth from 'fbase/clientApp'
import db from 'fbase/clientApp'
const authContext = createContext({ user: {} });
const { Provider } = authContext;


export function AuthProvider(props) {
  const auth = useAuthProvider();
  return <Provider value={auth}>{props.children}</Provider>;
 }
 export const useAuth = () => {
  return useContext(authContext);
  };


const fbdb = db.db;
const fbauth = auth.auth;
const [user, setUser] = useState<UserInfo | null>(null);
const useAuthProvider = () => {
  const createUser = (user) => {
    
    return fbdb
      .collection('users')
      .doc(user.uid)
      .set(user)
      .then(() => {
        setUser(user);
        return user;
      })
      .catch((error) => {
        return { error };
      });
  };
  const signUp = (name, email, password ) => {
      return fbauth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        fbauth.currentUser.sendEmailVerification();
        return createUser({ uid: response.user.uid, email, name });
      })
      .catch((error) => {
        return { error };
      });
    };
  return {user, signUp};
};

const signIn = ( email, password ) => {
  return fbauth
   .signInWithEmailAndPassword(email, password)
   .then((response) => {
    setUser(response.user);
    return response.user;
   })
   .catch((error) => {
    return { error };
   });
 };


export { user, signUp, signIn };