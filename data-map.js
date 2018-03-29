let code = "[{sku1,8},{sku2,8},{sku3,2},{sku1,6},{sku3,12},{sku9,3},{skuA3,1}]";

function run(code){
  let items = code.match(/{.*?}/g);

  let cache = {};
  let resultArr = [];

  items.forEach(function(item,index) {
    let result = /{(\w+),(\d+)}/.exec(item);
    let sku = result[1];
    let quantity = +result[2];
    if(cache[sku]){
      let item = cache[sku];
      item.quantity += quantity;
    }else{
      resultArr.push(cache[sku] = {sku,quantity});
    }
  });

  return resultArr;
}

console.log(run(code))
