export const checkPage = (pathname: string) => {
  const [, page, leaf] = pathname.split("/");
  const decodedLeaf = decodeURI(leaf);

  return [page, decodedLeaf];
};
