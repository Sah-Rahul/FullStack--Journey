# Day 18 – Backend Security (Rate Limiting, CORS, Helmet)

## What I Learned
- **Rate Limiting:** Protect backend from request flooding or DDoS attacks.
- **CORS:** Control which frontends can access APIs.
- **Helmet:** Secure HTTP headers to prevent common vulnerabilities.

## Code Highlights
```js
import helmet from "helmet";
import rateLimit from "express-rate-limit";

app.use(helmet());

const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });
app.use(limiter);
```