import pb from "../utils";

export const login = async (
  username: string,
  password: string
): Promise<any> => {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(username, password);
    return authData;
  } catch (error) {
    console.error("error", error);
    throw Error;
  }
};

export const logout = (): void => {
  pb.authStore.clear();
};
