import { useEffect, useRef } from "react";

const useWhyDidYouUpdate = (name, props) => {
  const prevProps = useRef();

  useEffect(() => {
    if (prevProps.current) {
      const whyUpdated = {};

      // get keys
      const keys = Object.keys({ ...prevProps.current, props });

      keys.forEach((key) => {
        // for Object check - as functions are nothing but an object

        if (
          typeof prevProps.current[key] === "object" &&
          typeof props[key] === "object"
        ) {
          // converting obj to string and then checking
          if (
            JSON.stringify(prevProps.current[key]) !==
            JSON.stringify(props[key])
          ) {
            whyUpdated[key] = { from: prevProps.current[key], new: props[key] };
          }
        } else {
          // value check
          if (prevProps.current[key] !== props[key]) {
            whyUpdated[key] = { from: prevProps.current[key], new: props[key] };
          }
        }
      });

      if (Object.keys(whyUpdated).length) {
        console.log("this has cause re-render", whyUpdated);
      }
    }

    // point to new props
    prevProps.current = props;
  }, [name, props]);
};

export default useWhyDidYouUpdate;
