function number_cardinality(num) {
  if (num % 10 === 0) {
    return "zero";
  } else if (num % 10 === 5) {
    return "five";
  } else if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
module.exports = number_cardinality()