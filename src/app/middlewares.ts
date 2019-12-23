import { getDefaultMiddleware } from "@reduxjs/toolkit";
import restApiService from "../services/reatApi";

const extraArg = { restApiService };
export type ExtraArg = typeof extraArg;

const customizedThunk = getDefaultMiddleware({
  thunk: {
    extraArgument: extraArg
  },
})

export default [...customizedThunk];