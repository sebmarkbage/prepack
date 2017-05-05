let c = 0;
let overflow = false;
function check() {
  return global.__abstract ? __abstract('boolean', 'true') : true;
}
function call() {
  if (check()) {
    c++;
    if (c > 2) {
      overflow = true;
    }
  }
}
call();
call();
inspect = function() {
  return overflow;
};
