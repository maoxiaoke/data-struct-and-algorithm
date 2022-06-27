# 数组

正如前面章节介绍的，数组通常有两层含义。一是描述了数据的存储方式；同时，也是一种抽象的数据结构。作为抽象数据结构，它有以下特点：

1. 连续的存储空间

数组中各元素在内存中的位置是相邻的。

2. 固定长度

由于数组的空间必须是连续的，也就意味着需要一整块空间来存放数组。如果不是固定长度，那么内存中位于数组之后的区域就无法分配，因为无法确定存放在数组中的数据会占用多少的内存。

3. 相同的数据类型

同样，影响一次性申请内存空间的大小除了数组的长度，还有数据的类型。在编程语言中，不同的数据类型（比如布尔类型和整型）占用的字节数不一样，若数组中存在不同的数据类型，同样无法初始数组的内存空间。

## JavaScript 的 Array 对象

在 JavaScript 中，[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 对象并非传统意义上的数组。比如，使用 JavaScript 的 Array 无需初始化申请一块固定的空间、可以存放不同的数据类型、还可以动态修改数组的长度，等等。

根据 V8 的实现[代码](https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/objects/js-array.h)，JavaScript Array 存在两种模式：

+ Fast Mode

在 Fast Mode 下，V8 引擎会用一整块连续的内存空间来存储。即便是这种模式下，数组的长度是可变的。在 V8 内部，通过扩容和收缩机制，在长度变化时，会将新数组拷贝到另一个内存空间。

+ Slow Mode

Slow Mode 下，JavaScript 数据以 HashTable 的方式进行存储。同时，当满足以下两个条件时，Fast Mode 会转化为以 Slow Mode 的方式进行存储：

```c++
// https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/objects/js-objects-inl.h
static const uint32_t kMaxGap = 1024;

static inline bool ShouldConvertToSlowElements(uint32_t used_elements,
                                               uint32_t new_capacity) {
  // 新容量 >= 3 * 扩容后的容量 * 2
  uint32_t size_threshold = NumberDictionary::kPreferFastElementsSizeFactor *
                            NumberDictionary::ComputeCapacity(used_elements) *
                            NumberDictionary::kEntrySize;
  return size_threshold <= new_capacity;
}
static inline bool ShouldConvertToSlowElements(JSObject object,
                                               uint32_t capacity,
                                               uint32_t index,
                                               uint32_t* new_capacity) {
  static_assert(JSObject::kMaxUncheckedOldFastElementsLength <=
                JSObject::kMaxUncheckedFastElementsLength);
  if (index < capacity) {
    *new_capacity = capacity;
    return false;
  }
  // 存在 1024 个 holey 时，会转换为 Slow Mode
  if (index - capacity >= JSObject::kMaxGap) return true;
  *new_capacity = JSObject::NewElementsCapacity(index + 1);
  DCHECK_LT(index, *new_capacity);
  if (*new_capacity <= JSObject::kMaxUncheckedOldFastElementsLength ||
      (*new_capacity <= JSObject::kMaxUncheckedFastElementsLength &&
       ObjectInYoungGeneration(object))) {
    return false;
  }
  return ShouldConvertToSlowElements(object.GetFastElementsUsage(),
                                     *new_capacity);
}
```

1. 新容量 >= 3 * 扩容后的容量 * 2
2. 存在 1024 个连续空洞（该内存不存放数据，返回 undefined）

总的来说，在 JavaScript 中，Array 对象并非完全是数据结构「数组」的对应实现。但是，我们可以使用 Array 的 Fast Mode 来实现数组（同时还要预防止 Fast Mode 转化为 Slow Mode）。

> 实际上，JavaScript 对象实际上更倾向于是抽象数据结构「列表」的具体实现。
