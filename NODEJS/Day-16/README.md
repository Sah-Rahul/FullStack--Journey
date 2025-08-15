#  Day 16 – MongoDB Aggregation & Analytics 📊

Today I learned how to use **MongoDB Aggregation Pipelines** to generate analytics for an app.

### 🔑 Features
- **Total Sales & Orders** → using `$group`
- **Monthly Sales Report** → using `$month`
- **Top Customers Report** → using `$lookup` (joins) + `$sort`

### 📂 APIs
- `GET /api/analytics/total-sales` → Returns total revenue & order count
- `GET /api/analytics/sales-by-month` → Returns sales grouped by month
- `GET /api/analytics/top-customers` → Returns top 5 customers with spending

### ⚡ Tech Used
- Node.js + Express
- MongoDB Aggregation
- Mongoose

---

🚀 With these analytics, we can build dashboards like:
- Revenue tracking
- User activity insights
- Growth reports
