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
  inOrder (node = this.#root, arr = []) {
    if (node !== null) {
      this.inOrder(node.left, arr);
      arr.push(node.data);
      this.inOrder(node.right, arr);
    }
    return arr;
  }

  // 先序遍历：根节点 - 左子树 - 右子树
  preOrder (node = this.#root, arr = []) {
    if (node !== null) {
      arr.push(node.data)
      this.preOrder(node.left, arr);
      this.preOrder(node.right, arr);
    }
    return arr;
  }

  // 后序遍历： 左子树 - 右子树 - 根节点
  postOrder (node = this.#root, arr = []) {
    if (node !== null) {
      this.postOrder(node.left, arr);
      this.postOrder(node.right, arr);
      arr.push(node.data);
    }

    return arr;
  }
}
