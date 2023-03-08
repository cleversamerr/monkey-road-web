import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
  const { user, setUser, socket } = useContext(AuthContext);

  const logout = () => {
    authStorage.removeToken();
    setUser(null);
  };

  const login = (user, token) => {
    authStorage.storeToken(token);
    setUser(user);
  };

  return { user, setUser, login, logout, socket };
};

export default useAuth;
