const breadcrumbs = [
  { id: 1, parentId: null, title: "mobile" },
  { id: 5, parentId: 3, title: "bell" },
  { id: 3, parentId: 2, title: "laptop" },
  { id: 2, parentId: 1, title: "tv" },
];

// ["mobile", "tv", "laptop", "bell"]

const getBreadcrumb = (breadcrumbs) => {
  let output = [];

  const recurr = (parentId) => {
    let childrens = breadcrumbs.filter(
      (breadcrumb) => breadcrumb.parentId === parentId
    );

    for (let children of childrens) {
      output.push(children.title);

      recurr(children.id);
    }
  };

  recurr(null);

  return output;
};

/**
const getBreadcrumb = (breadcrumbs) => {
  let inputBreadcrumbs = breadcrumbs;
  let output = [];

  const recurr = (breadcrumbs) => {
    if (!breadcrumbs) return output;

    if (Array.isArray(breadcrumbs)) {
      for (let breadcrumb of breadcrumbs) {
        if (breadcrumb.parentId === null) {
          let id = breadcrumb.id;
          output.push(breadcrumb.title);

          let nextObj = breadcrumbs.find(
            (breadcrumb) => breadcrumb.parentId === id
          );

          recurr(nextObj);
        }
      }
    } else {
      output.push(breadcrumbs.title);

      recurr(
        inputBreadcrumbs.find(
          (inputBreadcrumb) => inputBreadcrumb.parentId === breadcrumbs.id
        )
      );
    }
  };

  recurr(breadcrumbs);

  return output;
};
 */

console.log(getBreadcrumb(breadcrumbs));
