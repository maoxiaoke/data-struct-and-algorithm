# 内存的工作原理

数据结构是一个研究 **数据如何存储** 的命题。当将数据存储在内存中，计算机需要提供存储空间。如果需要存储多项数据时，有两种 **基本** 的存储方式:

+ 以顺序方式存储
+ 以链式方式存储

## 顺序存储

顺序存储，也就是以 [数组](https://en.wikipedia.org/wiki/Array_data_structure) 的方式进行存储：将数据存储在物理位置上相邻的存储节点。

## 链式存储

若以 [链表](https://en.wikipedia.org/wiki/Linked_list#:~:text=In%20computer%20science%2C%20a%20linked,which%20together%20represent%20a%20sequence) 方式进行存储的数据，无需申请一整块连续的数据存储节点，而是每个元素存储了下一个元素的地址，从而使一系列随机的内存地址串在一起。

## 「数组」和「链表」是更基础的数据结构

在算法和数据结构的描述中，「数组」和「链表」有着更为底层的概念：

+ **是一种抽象的数据结构**：
比如，数组描述了 **一个有固定内存空间，数据存储在相邻物理位置上的** 的这样一种线性结构；而链表描述的是 **数据分散存储于物理内存** 的这样一种线性结构。

+ 是一种 **基础数据结构类型**：其他的抽象数据结构的实现上，或多或少使用数组或链表两种数据结构。
