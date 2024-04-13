import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation(); // http://localhost:3000/home/1 -> /home/1
  const pathNames = pathname.split("/").filter((x) => x);

  console.log({ pathNames });

  let breadcrumbsPath = "";

  return (
    <div>
      {pathNames.length > 0 && <a href="/">Home</a>}

      {pathNames.map((pathName, idx) => {
        breadcrumbsPath += `/${pathName}`;
        const isLast = idx === pathNames.length - 1;

        return !isLast ? (
          <a href={breadcrumbsPath}>/ {pathName}</a>
        ) : (
          <span>/ {pathName}</span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
