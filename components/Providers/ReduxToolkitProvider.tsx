"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

function ReduxToolkitProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxToolkitProvider;
