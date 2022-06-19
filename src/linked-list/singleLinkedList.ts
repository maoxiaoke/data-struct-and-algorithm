// 定义单链表的节点结构
class SingleLinkedNode <T> {
  #data: T | null;
  public next: SingleLinkedNode<T> | null;

  constructor (data: T) {
    this.#data = data;
    this.next = null;
  }

  get data () {
    return this.#data;
  }
}

export class SingleLinkedList {
  #head: SingleLinkedNode<number> = null;
  /**
   *
   * @param data
   * @param before 在该节点的末尾插入，若为空，则在链表末尾插入
   */
  insert (data: number, before?: number) {
    const node = new SingleLinkedNode(data);
    // 不存在链表，则创建一个链表结构
    if (this.#head === null) {
      this.#head = node;
      return;
    }

    const appendNode = (before !== undefined) ? this.find(before) : this.findLast();

    node.next = appendNode.next;
    appendNode.next = node;
  }

  find (value: number) {
    let current = this.#head;

    while (current.data !== value || current.next !== null) {
      current = current.next;
    }

    return current;
  }

  /**
   * Find the last node of linked list
   * @returns
   */
  findLast () {
    let current = this.#head;

    while (current.next !== null) {
      current = current.next;
    }

    return current;
  }
}
