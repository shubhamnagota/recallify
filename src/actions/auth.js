import { firebase, googleAuthProvider } from "../firebase";

// LOGIN
export const login = uid => ({
  type: "LOGIN",
  uid
});

// LOGOUT
export const logout = () => ({
  type: "LOGOUT"
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
