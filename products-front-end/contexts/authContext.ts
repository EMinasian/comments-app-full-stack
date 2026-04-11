import { createContext } from "react";
import type { AuthContextType } from "@/types/auth";

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
});

export default AuthContext;
