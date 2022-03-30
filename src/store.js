// src/store.js

import { writable, derived } from "svelte/store";

import config from "./auth_config.js";

export const isAuthenticated = writable(false);
export const isAuthorized = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();

export const tasks = writable([]);

export const user_tasks = derived([tasks, user], ([$tasks, $user]) => {
  let logged_in_user_tasks = [];

  if ($user && $user.email) {
    logged_in_user_tasks = $tasks.filter((task) => task.user === $user.email);
    if (config.userList.includes($user.email)) {
      isAuthorized.set(true);
    }
  }

  return logged_in_user_tasks;

});
