import _ from 'lodash';
import * as trees from '@hexlet/immutable-fs-trees';

const compressImages = (tree) => {
  const children = trees.getChildren(tree);
  const newChildren = children.map((child) => {
    const name = trees.getName(child);
    const fileExtension = name.split('.').at(-1);
    const isPicture = fileExtension === 'jpg';

    if (trees.isDirectory(child) || !isPicture) {
      return child;
    }

    const newMeta = _.cloneDeep(trees.getMeta(child));
    const sizePicture = newMeta.size;
    newMeta.size = sizePicture / 2;

    return trees.mkfile(name, newMeta);
  });

  const newMeta = _.cloneDeep(trees.getMeta(tree));
  return trees.mkdir(trees.getName(tree), newChildren, newMeta);
};

// eslint-disable-next-line import/prefer-default-export
export { compressImages };
