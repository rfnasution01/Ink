interface PathObject {
  name: string;
  url: string;
}

export function getPathObjects(pathSegments: string[]): PathObject[] {
  let pathObjects: PathObject[] = [];
  let currentPath: string = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    pathObjects.push({
      name: segment,
      url: currentPath,
    });
  });
  return pathObjects;
}
