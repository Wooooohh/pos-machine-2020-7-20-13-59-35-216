function printReceipt(barcodes) {
//     console.log(`
// ***<store earning no money>Receipt ***
// Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
// Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
// Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
// ----------------------
// Total: 23 (yuan)
// **********************`)
    var ItemsNum = countItemsNum(barcodes);
    var ItemsInfo = improveItemsInfo(ItemsNum);
    ItemsInfo = coutItemPrice(ItemsInfo);
    var total = coutTotalPrice(ItemsInfo);
    var ReceiptInfo = formatReceiptInfo(total,ItemsInfo);
    printReceiptInfo(ReceiptInfo);
}

function countItemsNum(barcodes){
    let ItemsNums = []; 
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
        ItemsNums.push(obj);
    });
    return ItemsNums;
}

function improveItemsInfo(ItemsNum){
    let ItemsInfo = getItemsInfo();
    for (let i = 0; i < ItemsNum.length; i++) {
        let obj = ItemsNum[i];
        for(let j = 0; j < ItemsInfo.length; j++){
            let info = ItemsInfo[j];
            if(obj.barcode == info.barcode){
                obj.name = info.name;
                obj.price = info.price;
            }
            // console.log(ItemsNum)
        }
    }
    return ItemsNum;
}

function coutItemPrice(ItemsInfo){
    for (let i = 0; i < ItemsInfo.length; i++) {
        let obj = ItemsInfo[i];
        let subprice = obj.num*obj.price;
        obj.subprice = subprice;
    }
    return ItemsInfo;
}

function coutTotalPrice(ItemsInfo){
    let Total = 0;
    for (let i = 0; i < ItemsInfo.length; i++) {
        let obj = ItemsInfo[i];
        Total = Total + obj.subprice;
    }
    return Total;
}
// ***<store earning no money>Receipt ***
// Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
// Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
// Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
// ----------------------
// Total: 23 (yuan)
// **********************`
function formatReceiptInfo(total, ItemsInfo){
    let ReceiptInfo ='\n***<store earning no money>Receipt ***\n';
    for(let i = 0; i < ItemsInfo.length; i++){
        let obj = ItemsInfo[i];
        ReceiptInfo = ReceiptInfo + 'Name: ' + obj.name +', Quantity: '+ obj.num +', Unit price: ' + obj.price + ' (yuan), Subtotal: ' + obj.subprice + ' (yuan)\n'
    }
    ReceiptInfo = ReceiptInfo + '----------------------\n';
    ReceiptInfo = ReceiptInfo + 'Total: ' + total + ' (yuan)\n';
    ReceiptInfo = ReceiptInfo + '**********************';
    return ReceiptInfo;
}

function printReceiptInfo(ReceiptInfo){
    console.log(ReceiptInfo)
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