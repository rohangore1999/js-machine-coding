import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
  //  It does not cause re-renders when its value is changed because changes 
  // to the ref value do not trigger a component to re-render. 
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
