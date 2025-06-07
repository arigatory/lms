// mongo-init.js
// Run this manually with: mongosh "mongodb://root:example@localhost:27017/admin" mongo-init.js

// Create or switch to your LMS database
db = db.getSiblingDB('lms')

// Create application user with read/write access to LMS database
db.createUser({
  user: "lmsuser",
  pwd: "lmspassword",
  roles: [
    { role: "readWrite", db: "lms" },
    { role: "dbAdmin", db: "lms" }
  ]
})

// Verify
print("Users created in LMS database:")
db.getUsers()