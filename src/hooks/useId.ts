import { useState } from "react";

let id = 0;
const generateId = () => {
  return ++id;
};

const useId = () => {
  const [id] = useState(generateId);
  return id;
};
export default useId;
