import { Branch } from "../interfaces";
import pb from "../utils";

export const getBranchList = async (): Promise<Branch[] | undefined> => {
  try {
    const records = await pb.collection("branches").getFullList<Branch>();
    return records;
  } catch (error) {
    console.error("error", error);
    throw Error;
  }
};

export const addBranch = async (item: Partial<Branch>): Promise<void> => {
  try {
    await pb.collection("branches").create(item);
  } catch (error) {
    console.error("error", error);
    throw Error;
  }
};

export const updateBranch = async (
  id: string,
  item: Partial<Branch>
): Promise<void> => {
  try {
    await pb.collection("branches").update(id, item);
  } catch (error) {
    console.error("error", error);
    throw Error;
  }
};

export const deleteBranch = async (id: string): Promise<void> => {
  try {
    await pb.collection("branches").delete(id);
  } catch (error) {
    console.error("error", error);
    throw Error;
  }
};
