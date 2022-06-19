/**
 * 二叉查找树 Binary Search Tree，（又：二叉搜索树，二叉排序树）它或者是一棵空树，或者是具有下列性质的二叉树： 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 它的左、右子树也分别为二叉排序树。
 * 相比于其他数据结构的优势在于查找、插入的时间复杂度较低。为 O(log n)
 */

// 定义二叉树的节点结构
class TreeNode<T> {
  #data: T | null;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;

  constructor (data: T, left?: TreeNode<T>, right?: TreeNode<T>) {
    this.#data = data;
    this.left = left ?? null;
    this.right = right ?? null;
  }

  get data () {
    return this.#data;
  }
}

// 定义二叉查找树
export class BSTree {
  #root: TreeNode<number> = null;

  insert (data: number) {
    const node = new TreeNode(data);

    // 1. 没有根节点，设置为当前根节点
    if (this.#root === null) {
      this.#root = node;
    } else {
      let current = this.#root;
      let parent = null;
      while (true) {
        parent = current;

        if (data < current.data) {
          current = current.left;

          if (current === null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;

          if (current === null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }

  // 中序遍历，先遍历左子树 - 根节点 - 右子树
  dfsInOrder (node = this.#root, arr = []) {
    if (node !== null) {
      this.dfsInOrder(node.left, arr);
      arr.push(node.data);
      this.dfsInOrder(node.right, arr);
    }
    return arr;
  }

  // 先序遍历：根节点 - 左子树 - 右子树
  dfsPreOrder (node = this.#root, arr = []) {
    if (node !== null) {
      arr.push(node.data)
      this.dfsPreOrder(node.left, arr);
      this.dfsPreOrder(node.right, arr);
    }
    return arr;
  }

  // 后序遍历： 左子树 - 右子树 - 根节点
  dtsPostOrder (node = this.#root, arr = []) {
    if (node !== null) {
      this.dtsPostOrder(node.left, arr);
      this.dtsPostOrder(node.right, arr);
      arr.push(node.data);
    }

    return arr;
  }

  // 广度优先遍历，使用队列实现
  bfs (node = this.#root) {
    const queue = [node];
    const arr = [];

    while(queue.length) {
      const { left, right, data } = queue.shift();
      arr.push(data)
      left && queue.push(left);
      right && queue.push(right);
    }

    return arr;
  }
}
