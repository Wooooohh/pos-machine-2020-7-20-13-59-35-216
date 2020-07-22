function printReceipt(barcodes) {
//     console.log(`
// ***<store earning no money>Receipt ***
// Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
// Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
// Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
// ----------------------
// Total: 23 (yuan)
// **********************')
    var itemsNum = countItemsNum(barcodes);
    var itemsInfo = improveItemsInfo(itemsNum);
    ItemsInfo = coutItemPrice(itemsInfo);
    var total = coutTotalPrice(itemsInfo);
    var ReceiptInfo = formatReceiptInfo(total,itemsInfo);
    printReceiptInfo(ReceiptInfo);
}

function countItemsNum(barcodes){
    let itemsNums = []; 
    let map = new Map();
    for (let index = 0; index < barcodes.length; index++) {
        let b = barcodes[index];
        if(map.has(b))
            map.set(b, map.get(b)+1)
        else
            map.set(b,1);
    }
    map.forEach(function(value,key){
        let obj = new Object();
        obj.barcode = key;
        obj.num = map.get(key);
        itemsNums.push(obj);
    });
    return itemsNums;
}

function improveItemsInfo(itemsNum){
    let itemsInfo = getItemsInfo();
    for (let i = 0; i < itemsNum.length; i++) {
        let obj = itemsNum[i];
        for(let j = 0; j < itemsInfo.length; j++){
            let info = itemsInfo[j];
            if(obj.barcode == info.barcode){
                obj.name = info.name;
                obj.price = info.price;
            }
            // console.log(ItemsNum)
        }
    }
    return itemsNum;
}

function coutItemPrice(itemsInfo){
    for (let i = 0; i < itemsInfo.length; i++) {
        let obj = itemsInfo[i];
        let subprice = obj.num*obj.price;
        obj.subprice = subprice;
    }
    return itemsInfo;
}

//TODO: name space
function coutTotalPrice(itemsInfo){
    let total = 0;
    for (let i = 0; i < itemsInfo.length; i++) {
        let obj = itemsInfo[i];
        total = total + obj.subprice;
    }
    return total;
}
// ***<store earning no money>Receipt ***
// Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
// Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
// Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
// ----------------------
// Total: 23 (yuan)
// **********************`
function formatReceiptInfo(total, ItemsInfo){
    let receiptInfo ='\n***<store earning no money>Receipt ***\n';
    for(let i = 0; i < itemsInfo.length; i++){
        let obj = itemsInfo[i];
        receiptInfo = receiptInfo + 'Name: ' + obj.name +', Quantity: '+ obj.num +', Unit price: ' + obj.price + ' (yuan), Subtotal: ' + obj.subprice + ' (yuan)\n'
    }
    receiptInfo = receiptInfo + '----------------------\n';
    receiptInfo = receiptInfo + 'Total: ' + total + ' (yuan)\n';
    receiptInfo = receiptInfo + '**********************';
    return receiptInfo;
}

function printReceiptInfo(receiptInfo){
    console.log(receiptInfo)
}

function getItemsInfo(){
    return [
        {
           barcode: 'ITEM000000',
           name: 'Coca-Cola',
           price: 3
         },
         {
           barcode: 'ITEM000001',
           name: 'Sprite',
           price: 3
         },
         {
           barcode: 'ITEM000002',
           name: 'Apple',
           price: 5
         },
         {
           barcode: 'ITEM000003',
           name: 'Litchi',
           price: 15
         },
         {
           barcode: 'ITEM000004',
           name: 'Battery',
           price: 2
         },
         {
           barcode: 'ITEM000005',
           name: 'Instant Noodles',
           price: 4
         }
     ];
}

const barcodes = [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
];
printReceipt(barcodes)


module.exports = {
    printReceipt
};