# 动态规划

动态规划 (Dynamic Programming, DP) 通过把原问题分解为相对简单的子问题，通过「自低而下」的方式来「推导」复杂问题的方法。

## 和递归的区别

递归是「自顶而下」的解题思路。比如典型的斐波那契数列：`F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）`，通过递归求解：

```js
// 递归解法
const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}
```

是直接从 `n` 开始求解，直至最小问题。而 DP 则是反过来，以规模最小的 `f(1)` 和 `f(2)` 开始往上推，知道后续的状态转移方程为：`dp[i] = dp[i-1] + dp[i-2] （n ≥ 2，n ∈ N*）`，即可「预测」`f(n)` 的结果。

```js
// dp 解法
const fibonacci = (n) => {
  const dp = [];
  dp[0] = dp[1] = 1;

  for (let i = 2; i < n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1]
}
```

## 应用场景

DP 有几个典型特征：状态转移方程，重叠子问题，边界。有一个问题，把所有可能的答案穷举出来，如果存在重叠子问题，就可以考虑动态规划。

比如一些求最值得场景，最长递增子序列，最小编辑距离，背包问题，凑零钱问题。

## 解题思路


## 类似的 Leetcode

+ [70.爬楼梯](https://github.com/maoxiaoke/data-struct-and-algorithm/issues/2)
+ [53.最大子数组和](https://github.com/maoxiaoke/data-struct-and-algorithm/issues/1)

