const stringer = (str: string | undefined) => {
  if (str) {
    return str;
  } else {
    return "";
  }
};

export const PORT = stringer(process.env.PORT);
export const MONGODB_URI = stringer(process.env.MONGODB_URI);
