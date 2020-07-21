# Requirement
A cash register (POS) system is used in the store for settlement of the store. This cashier will settle and print the receipt (Receipt) according to the item(Item) in the customer's shopping cart (Cart) at the time of settlement.

We need to implement a function called printReceipt, which can input the data of the specified format as a parameter and then output the text of the receipt in the browser console.

This time, the input will be an array of barcodes (string). For example:
```javascript
[
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
]
```

Then the output should be 
```
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************
```

Suppose that our database is as follows:
```javascript
[
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
]
```

# Principal

1. Please draw context diagram.
2. Please declare all the methods according to your diagram.
3. Please implement the function according to the context diagram
4. Please repeat step 3 until all functions are implemented.

# PDCA(testing)

| PDCA | countItemsNum |
| :----: | :----: |
| P | 3min |
| D | 12min |
| C | 由于对JS集合的使用不熟悉，需要上网查找相关资料 |
| A | 做更多的练习 |

| PDCA | improveItemsInfo |
| :----: | :----: |
| P | 3min |
| D | 5min |
| C | 由于对JS对象的基本操作不熟练，需要上网查找相关资料 |
| A | 做更多的练习 |

| PDCA | coutItemPrice |
| :----: | :----: |
| P | 3min |
| D | 3min |
| C | 对JS基础知识的使用熟练，本方法的输入输出清晰 |
| A | 下次计划更短的事件 |

| PDCA | coutItemPrice |
| :----: | :----: |
| P | 5min |
| D | 3min |
| C | 对JS基础知识的使用熟练，本方法的输入输出清晰 |
| A | 下次计划更短的事件 |

| PDCA | formatReceiptInfo |
| :----: | :----: |
| P | 5min |
| D | 1min |
| C | 对JS基础知识的使用熟练，本方法的输入输出清晰 |
| A | 下次计划更短的事件 |

| PDCA | printReceiptInfo |
| :----: | :----: |
| P | 1min |
| D | 1min |
| C | 需求比较简单，代码实现容易 |
| A | 下次计划更短的事件 |
