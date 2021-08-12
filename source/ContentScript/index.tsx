import * as React from "react";
import * as ReactDOM from "react-dom";
import { browser } from "webextension-polyfill-ts";
import { BACKEND_URL } from "../config/env-var";
import Content from "./Content";
import { get } from "./isAuth";

browser.runtime.onMessage.addListener(async (message, sender) => {
  if (message.action === "Google") {
    return get();
  }
  if (message.action === "googleAuth") {
    window.location.href = `${BACKEND_URL}/auth/google/url`;
  }
});

const content = document.createElement("div");
document.body.appendChild(content);

ReactDOM.render(<Content />, content);
