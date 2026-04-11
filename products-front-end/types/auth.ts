export type UserType = {
  userId: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  profilePictureUrl: string;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | null;
};
