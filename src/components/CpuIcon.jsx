import { BsScissors } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { TbHandRock } from "react-icons/tb";

export const CpuIcon = ({ action, ...props }) => {
  const iconList = {
    rock: TbHandRock,
    paper: FaPaperPlane,
    scissors: BsScissors,
  };
  const Icon = iconList[action];
  return (
    <div className="player-one-icon">
      <Icon size={60} />
    </div>
  );
};
