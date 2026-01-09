# PUB/SUB (EVENT-DRIVEN SYSTEM)

## Use case

- Admin updates post

- All services clear cache

## publisher
```js

await redis.publish("post-events", JSON.stringify({ type: "POST_UPDATED" }));
```

## Subscriber
```js

redis.subscribe("post-events");

redis.on("message", async (_, message) => {
  const event = JSON.parse(message);

  if (event.type === "POST_UPDATED") {
    await redis.del("posts:all");
  }
});
```
