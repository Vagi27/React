import { createContext, useState } from "react";

const userContext = createContext({
  info: {
    username: "dummy",
    email: "dummy@gmail.com",
  },
});

export default userContext;
