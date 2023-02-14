export default (tree) => {
  const newTree = tree.filter((node) => Array.isArray(node));
  return newTree.flat(1);
};
