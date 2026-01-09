# 🚀 Redis CLI Cheatsheet

A comprehensive and beautiful cheatsheet for Redis CLI commands with PDF download functionality.

## 📋 Table of Contents

- [Docker Setup](#docker-setup)
- [String Operations](#string-operations)
- [List Operations](#list-operations)
- [Set Operations](#set-operations)
- [Hash Operations](#hash-operations)
- [Database Management](#database-management)
- [Utility Commands](#utility-commands)

---

## 🐳 Docker Setup

### Pull Redis Image

```bash
docker pull redis
```

### Run Redis Container

```bash
docker run -d --name redis-server -p 6379:6379 redis
```

### Start Redis CLI

```bash
docker exec -it redis-server redis-cli
```

---

## 📝 String Operations (Key-Value)

### Set a key

```redis
SET key "value"
```

### Get a key

```redis
GET key
```

### Delete a key

```redis
DEL key
```

### Get all keys

```redis
KEYS *
```

### Set expiry (in seconds)

```redis
EXPIRE key seconds
```

### Check TTL (Time To Live)

```redis
TTL key
```

**Example:**

```redis
SET username "john_doe"
GET username
EXPIRE username 3600
TTL username
```

---

## 📚 List Operations (Arrays)

### Push Operations

#### Push to left (start)

```redis
LPUSH key "value1" "value2" "value3"
```

#### Push to right (end)

```redis
RPUSH key "value1" "value2" "value3"
```

### Pop Operations

#### Pop from left

```redis
LPOP key
```

#### Pop from right

```redis
RPOP key
```

### Read Operations

#### Get range

```redis
LRANGE key start_index stop_index
```

#### Get all elements

```redis
LRANGE key 0 -1
```

#### Get list length

```redis
LLEN key
```

**Example:**

```redis
RPUSH tasks "task1" "task2" "task3"
LRANGE tasks 0 -1
LPOP tasks
LLEN tasks
```

---

## 🎯 Set Operations (Unique Arrays)

### Add members to set

```redis
SADD key "value1" "value2" "value3"
```

### Get all members

```redis
SMEMBERS key
```

### Check if member exists

```redis
SISMEMBER key "value"
```

### Remove member

```redis
SREM key "value"
```

### Get set size

```redis
SCARD key
```

**Example:**

```redis
SADD tags "redis" "database" "nosql"
SMEMBERS tags
SISMEMBER tags "redis"
SCARD tags
```

---

## 🗂️ Hash Operations (Objects)

### Set field in hash

```redis
HSET object_name key "value"
```

### Set multiple fields

```redis
HSET object_name key1 "val1" key2 "val2" key3 "val3"
```

### Get field value

```redis
HGET object_name key
```

### Get all fields and values

```redis
HGETALL object_name
```

### Get all keys

```redis
HKEYS object_name
```

### Get all values

```redis
HVALS object_name
```

### Delete field

```redis
HDEL object_name key
```

**Example:**

```redis
HSET user:1001 name "John Doe" email "john@example.com" age "30"
HGET user:1001 name
HGETALL user:1001
HDEL user:1001 age
```

---

## 🗑️ Database Management

### Flush all databases

```redis
FLUSHALL
```

⚠️ **Warning:** This command deletes ALL data from ALL databases permanently!

### Flush current database

```redis
FLUSHDB
```

⚠️ **Warning:** This command deletes all data from the current database permanently!

### Select database

```redis
SELECT index
```

### Get database size

```redis
DBSIZE
```

**Example:**

```redis
SELECT 0
DBSIZE
SELECT 1
```

---

## ℹ️ Utility Commands

### Check connection

```redis
PING
```

Response: `PONG`

### Check if key exists

```redis
EXISTS key
```

### Get key type

```redis
TYPE key
```

### Rename key

```redis
RENAME old_key new_key
```

### Get server info

```redis
INFO
```

**Example:**

```redis
PING
EXISTS username
TYPE username
RENAME username user_name
```

---

## 📖 Redis Data Types Summary

| Data Type  | Use Case                             | Example Commands     |
| ---------- | ------------------------------------ | -------------------- |
| **String** | Simple key-value pairs               | SET, GET, DEL        |
| **List**   | Ordered collections (queues, stacks) | LPUSH, RPUSH, LRANGE |
| **Set**    | Unique unordered collections         | SADD, SMEMBERS, SREM |
| **Hash**   | Objects with multiple fields         | HSET, HGET, HGETALL  |

---

## 🎯 Quick Tips

1. **Use meaningful key names** - Example: `user:1001:email` instead of just `email`
2. **Set expiry for temporary data** - Use `EXPIRE` to automatically delete old data
3. **Use the right data type** - Choose the appropriate Redis data structure for your use case
4. **Test before FLUSHALL** - Be very careful with FLUSHALL and FLUSHDB commands
5. **Monitor your keys** - Use `KEYS *` cautiously in production (use `SCAN` instead)

---

## 📚 Additional Resources

- [Redis Official Documentation](https://redis.io/docs/)
- [Redis Commands Reference](https://redis.io/commands/)
- [Redis Best Practices](https://redis.io/docs/manual/patterns/)

---

**Happy Redis Learning! 🚀**
