import _ from 'lodash';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

const getHiddenFilesCount = (tree) => {
  if (isFile(tree)) {
    return getName(tree).startsWith('.') ? 1 : 0;
  }

  const children = getChildren(tree);
  const hiddenCounts = children.map(getHiddenFilesCount);
  return _.sum(hiddenCounts);
};

export default getHiddenFilesCount;
