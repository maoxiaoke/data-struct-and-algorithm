# 列表

[列表（Lists）](https://en.wikipedia.org/wiki/List_(abstract_data_type)#:~:text=In%20computer%20science%2C%20a%20list,may%20occur%20more%20than%20once.) 这种抽象的数据结构，来自数学中[序列](https://en.wikipedia.org/wiki/Sequence) 的概念：

**序列是一组有限或者无限的，可枚举，可重复的对象集合**。比如高中课本上的数列，就是全由自然数组成的序列。

1. 序列可以是无限的，或者有限的。**对象个数有限的序列**，也叫做 n 元组或多元组。
2. 列表中的元素可以是任意数据类型。
3. 列表中的元素可重复。

在 JavaScript 中，[Array 对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 就是实现 **有限的序列**（或者叫元组）的一个 api。是一个非常常用的对象，并内置了很多方法和属性。

## 栈

[栈（Stack）](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) 可以解释为 **运算受限** 的列表，其规则是 LIFO（last-in-first-out, 后入先出）。

栈可以使用[数组]()或[链表]() 的方式进行存储。

JavaScript 中，Array 对象可以非常方便地实现一个栈。通常，我们使用 `push` 和 `pop` 两个方法来实现这种 LIFO 的运算：

+ [Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)：一个元素压入栈，简称「入栈」。
+ [Array.prototype.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)：将一个元素弹出栈，简称「出栈」，即栈顶的元素弹出。



## 