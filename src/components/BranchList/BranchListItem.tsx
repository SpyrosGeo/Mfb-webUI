import { useState } from "react";
import { Branch } from "../../interfaces";
import "./BranchList.css";
interface BranchItemProps {
  item: Branch;
}
const BranchItemComponent: React.FC<BranchItemProps> = ({ item }) => {
  const [error, setError] = useState<string | null>("");

  return (
    <div className="wishlist-item__container">
      <h3>{item.branch}</h3>
      <p>
        <a href={item.ticketUrl} target="_blank">
          View ticket
        </a>
      </p>
    </div>
  );
};

export default BranchItemComponent;
