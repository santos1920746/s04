Employee [
/* 1 */
{
    "_id" : ObjectId("632c0062f62dbe5a575e59b1"),
    "id" : "02135",
    "name" : "Jroa Duterte",
    "age" : "22",
    "jobRole" : "Regional Manager",
    "salary" : "120000"
},

/* 2 */
{
    "_id" : ObjectId("632c0085f62dbe5a575e59bf"),
    "id" : "02136",
    "name" : "Ping Lason",
    "age" : "21",
    "jobRole" : "Store Manager",
    "salary" : "45000"
},

/* 3 */
{
    "_id" : ObjectId("632c0095f62dbe5a575e59c9"),
    "id" : "02137",
    "name" : "Chavit Legarda",
    "age" : "26",
    "jobRole" : "Cashier",
    "salary" : "67500"
},

/* 4 */
{
    "_id" : ObjectId("632c00a0f62dbe5a575e59cc"),
    "id" : "02138",
    "name" : "Robin Zubiri",
    "age" : 30,
    "jobRole" : "Senior Cashier",
    "salary" : "72500"
},

/* 5 */
{
    "_id" : ObjectId("632c00b0f62dbe5a575e59d1"),
    "id" : "02139",
    "name" : "Zara Padilla",
    "age" : "21",
    "jobRole" : "Bagger",
    "salary" : "35000"
}
],

Inventory[
/* 1 */
{
    "_id" : ObjectId("632c01dff62dbe5a575e59f7"),
    "id" : "FoodPack0021231",
    "name" : "Herseys Bar - 250g",
    "price" : "200",
    "quantity" : "15000",
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
},

/* 2 */
{
    "_id" : ObjectId("632c023ff62dbe5a575e5a09"),
    "id" : "FoodPack0021232",
    "name" : "Herseys Bar - 250g",
    "price" : "Milk",
    "quantity" : "5000",
    "category" : [ 
        "Dairy", 
        "Healthy"
    ]
},

/* 3 */
{
    "_id" : ObjectId("632c0269f62dbe5a575e5a10"),
    "id" : "FoodPack0021233",
    "name" : "Eggs - 12 Pack",
    "price" : "180",
    "quantity" : "3000",
    "category" : [ 
        "poultry", 
        "Dairy"
    ]
},

/* 4 */
{
    "_id" : ObjectId("632c028bf62dbe5a575e5a13"),
    "id" : "FoodPack0021234",
    "name" : "Whole Chicken",
    "price" : "280",
    "quantity" : "1250",
    "category" : [ 
        "poultry", 
        "Meats"
    ]
},

/* 5 */
{
    "_id" : ObjectId("632c02acf62dbe5a575e5a1a"),
    "id" : "FoodPack0021235",
    "name" : "Carrots - 250g",
    "price" : "80",
    "quantity" : "9000",
    "category" : [ 
        "vegetables", 
        "Healthy"
    ]
},

/* 6 */
{
    "_id" : ObjectId("632c02f3f62dbe5a575e5a25"),
    "id" : "FoodPack0021236",
    "name" : "Banana - 250g",
    "price" : "70",
    "quantity" : "10000",
    "category" : [ 
        "Fruits", 
        "Dairy", 
        "Farm"
    ]
},

/* 7 */
{
    "_id" : ObjectId("632c0318f62dbe5a575e5a2a"),
    "id" : "FoodPack0021237",
    "name" : "Tomato - 250g",
    "price" : "150",
    "quantity" : "12000",
    "category" : [ 
        "vegetables", 
        "Dairy", 
        "Farm"
    ]
},

/* 8 */
{
    "_id" : ObjectId("632c0342f62dbe5a575e5a2f"),
    "id" : "FoodPack0021238",
    "name" : "Dairy Cream Butter - 500g",
    "price" : "100",
    "quantity" : "1500",
    "category" : [ 
        "Dairy", 
        "Healthy", 
        "Quality"
    ]
}
],
Payments [
/* 1 */
{
    "_id" : ObjectId("632c03b8f62dbe5a575e5a48"),
    "id" : "FP0021231",
    "grossAmount" : "200.00",
    "discounts" : "10",
    "netAmount" : "189.50",
    "date/time" : "2021-01-01T16:00:00Z"
},

/* 2 */
{
    "_id" : ObjectId("632c03c0f62dbe5a575e5a4d"),
    "id" : "FP0021232",
    "grossAmount" : "400.00",
    "discounts" : "0",
    "netAmount" : "400.00",
    "date/time" : "2021-01-01T16:15:55Z"
},

/* 3 */
{
    "_id" : ObjectId("632c03c8f62dbe5a575e5a52"),
    "id" : "FP0021233",
    "grossAmount" : "180.00",
    "discounts" : "15.00",
    "netAmount" : "165.00",
    "date/time" : "2021-01-01T16:31:08Z"
},

/* 4 */
{
    "_id" : ObjectId("632c03d2f62dbe5a575e5a57"),
    "id" : "FP0021234",
    "grossAmount" : "280.00",
    "discounts" : "0",
    "netAmount" : "280.00",
    "date/time" : "2021-01-01T20:25:52Z"
},

/* 5 */
{
    "_id" : ObjectId("632c03dbf62dbe5a575e5a5a"),
    "id" : "FP0021235",
    "grossAmount" : "80.00",
    "discounts" : "5.00",
    "netAmount" : "75.00",
    "date/time" : "2021-01-01T08:45:12Z"
},

/* 6 */
{
    "_id" : ObjectId("632c03e1f62dbe5a575e5a5d"),
    "id" : "FP0021236",
    "grossAmount" : "70",
    "discounts" : "50.00",
    "netAmount" : "20.00",
    "date/time" : "2021-01-01T11:02:35Z"
}

],

Promo[
/* 1 */
{
    "_id" : ObjectId("632c044df62dbe5a575e5a7e"),
    "id" : "PROMO01",
    "name" : "Choco Sale",
    "period" : 10,
    "dailySales" : "30, 70, 18, 45, 60, 25, 90"
},

/* 2 */
{
    "_id" : ObjectId("632c0454f62dbe5a575e5a81"),
    "id" : "PROMO02",
    "name" : "Milk Promo",
    "period" : 2,
    "dailySales" : "220, 300"
},

/* 3 */
{
    "_id" : ObjectId("632c045bf62dbe5a575e5a84"),
    "id" : "PROMO03",
    "name" : "Eggs Sales",
    "period" : 10,
    "dailySales" : "150, 120"
},

/* 4 */
{
    "_id" : ObjectId("632c0462f62dbe5a575e5a89"),
    "id" : "PROMO04",
    "name" : "Chicken Promo",
    "period" : 10,
    "dailySales" : "78, 98, 115, 198, 84, 288, 360"
}
]