
export const SESSION_KEYS = {
  USER_NAME: 'userName',
  USER_EMAIL: 'userEmail'
};

export const saveUserInfo = (name: string, email: string) => {
  sessionStorage.setItem(SESSION_KEYS.USER_NAME, name);
  sessionStorage.setItem(SESSION_KEYS.USER_EMAIL, email);
};

export const getUserInfo = () => {
  return {
    name: sessionStorage.getItem(SESSION_KEYS.USER_NAME),
    email: sessionStorage.getItem(SESSION_KEYS.USER_EMAIL)
  };
};

export const hasUserInfo = () => {
  const { name, email } = getUserInfo();
  return !!(name && email);
};

export const clearUserInfo = () => {
  sessionStorage.removeItem(SESSION_KEYS.USER_NAME);
  sessionStorage.removeItem(SESSION_KEYS.USER_EMAIL);
};
