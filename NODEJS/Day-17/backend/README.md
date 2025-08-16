# Day 16 – Aggregation Pipelines in MongoDB

## What I Learned
Today I explored **MongoDB Aggregation Pipelines**, a powerful way to analyze and transform data.

### Key Stages
- `$match` → filter documents
- `$group` → group by field and apply aggregation operators (`$sum`, `$avg`, `$max`)
- `$sort` → sort results
- `$lookup` → join with another collection
- `$project` → reshape fields

### Example Use Cases
1. **Monthly Sales Report** – total sales and orders by month  
2. **Top Customers** – highest spending users  
3. **Sales by Category** – category-wise revenue and quantity  

### Example Code
```js
Order.aggregate([
  { $group: { _id: { $month: "$createdAt" }, totalSales: { $sum: "$totalAmount" } } },
  { $sort: { _id: 1 } }
]);
