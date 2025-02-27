export const buildLoginPayload = (email, loginUser, loginPassword) => {
  return {
    email: email,
    loginUser: loginUser,
    loginPassword: loginPassword,
  };
};