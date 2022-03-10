import { UserStore } from "./userStore";

const getUserName = () => {
  const user = UserStore.getUser();
  return `${user.firstName} ${user.lastName}`;
};

export { getUserName };
