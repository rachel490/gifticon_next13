export const checkPage = (pathname: string) => {
  const [, page, leaf] = pathname.split("/");

  return [page, leaf];
};
