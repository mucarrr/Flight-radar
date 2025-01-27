import { MdOutlineQuestionMark } from "react-icons/md";

const nullCheck = (value, color) => {
  return (
    value || <MdOutlineQuestionMark style={{ color: color || "#1db99f" }} />
  );
};
export default nullCheck;
