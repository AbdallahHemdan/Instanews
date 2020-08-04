const isLoggedIn = () => {
  return localStorage.getItem('accessToken') ? true : false;
};

export { isLoggedIn };
