export const url = "https://54.244.204.59/api";

// export const url = "http://localhost:3001/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
