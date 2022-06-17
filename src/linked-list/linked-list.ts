class ListNode<T> {
	#element: T | null;
	#next: T | null;
	constructor (element: T) {
		this.#element = element;
		this.#next = null;
	}

  get element () {
    return this.#element;
  }

  get next () {
    return this.#next;
  }
}