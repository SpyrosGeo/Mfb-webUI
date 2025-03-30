import { useEffect, useState } from "react";
import { Branch } from "../../interfaces";
import { getBranchList } from "../../services/wishlist";
import BranchItemComponent from "./BranchListItem";

function BranchList() {
  const [branchList, setBranchList] = useState<Branch[]>([]);
  const [error, setError] = useState<string | null>("");
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const items = await getBranchList();
        if (!items?.length) return;
        setBranchList(items);
      } catch (error) {
        setError("Error fetching wishlist");
      }
    };
    fetchBranches();
  }, []);
  return (
    <div>
      <h2>Branches</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {branchList.map((item) => (
        <BranchItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}

export default BranchList;
