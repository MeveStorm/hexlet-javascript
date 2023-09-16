import _ from 'lodash';
import * as trees from '@hexlet/immutable-fs-trees';

const downcaseFileNames = (tree) => {
  const name = trees.getName(tree);
  const newMeta = _.cloneDeep(trees.getMeta(tree));

  if (trees.isFile(tree)) {
    return trees.mkfile(name.toLowerCase(), newMeta);
  }

  const children = trees.getChildren(tree);

  const newChildren = children.map((child) => downcaseFileNames(child));
  return trees.mkdir(name, newChildren, newMeta);
};

export default downcaseFileNames;
