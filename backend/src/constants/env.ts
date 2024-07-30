const stringer = (str: string | undefined) => {
  if (str) {
    return str;
  } else {
    return "";
  }
};

export const PORT = stringer(process.env.PORT);
export const MONGODB_URI = stringer(process.env.MONGODB_URI);
export const NODE_ENV = stringer(process.env.NODE_ENV);
export const APP_ORIGIN = stringer(process.env.APP_ORIGIN);
export const JWT_SECRET = stringer(process.env.JWT_SECRET);
export const JWT_REFRESH_SECRET = stringer(process.env.JWT_REFRESH_SECRET);
