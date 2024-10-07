/** @format */

export const checkValidation = (
  name: string,
  email: string,
  password: string
) => {
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Eamil ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isNameValid) return "Name is not valid";

  return null;
};
