var ProductOfNumbers = function () {
  this.prod = [1];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  const length = this.prod.length;

  if (!num) {
    this.prod = [1];
  } else {
    this.prod.push(this.prod[length - 1] * num);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  const length = this.prod.length;
  if (this.prod.length <= k) {
    return 0;
  }
  return this.prod[length - 1] / this.prod[length - k - 1];
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
