export interface AuthUser {
  email: string;
  password: string;
}

export interface APIAuth {
  authToken?: string;
  user?: AuthUser;
}
