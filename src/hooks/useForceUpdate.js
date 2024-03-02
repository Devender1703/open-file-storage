import { useState, useCallback } from "react";

const useForceUpdate = () => {
  const [forceUpdate, setForceUpdate] = useState(0);
  return [
    forceUpdate,
    useCallback(() => {
      setForceUpdate((s) => s + 1);
    }, [])
  ];
};

export default useForceUpdate;
