import _ from 'lodash';
import {
  getMeta, isFile, getChildren, getName,
} from '@hexlet/immutable-fs-trees';

const getFilesSize = (node) => {
  if (isFile(node)) {
    return getMeta(node).size;
  }

  const children = getChildren(node);
  const descendantCounts = children.map(getFilesSize);
  return _.sum(descendantCounts);
};

const du = (tree) => {
  const children = getChildren(tree);
  const result = children
    .map((child) => [getName(child), getFilesSize(child)]);

  return result.sort(([, size1], [, size2]) => size2 - size1);
};

export default du;
