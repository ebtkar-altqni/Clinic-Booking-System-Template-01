// Import necessary MongoDB functions
const rs = require("mongodb").ReplSet
const sleep = require("sleep").sleep
let db = require("mongodb").db

// Initialize MongoDB replica set
rs.initiate({
  _id: "rs0",
  members: [
    {
      _id: 0,
      host: "mongodb:27017",
    },
  ],
})

// Wait for replica set to be ready
while (!rs.isMaster().ismaster) {
  sleep(1000)
}

// Create application database and collections
db = db.getSiblingDB("clinic_db")

// Create collections with validation
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "firstName", "lastName", "role"],
      properties: {
        email: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        firstName: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        lastName: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        role: {
          enum: ["patient", "doctor", "admin"],
          description: "must be one of the enum values and is required",
        },
      },
    },
  },
})

db.createCollection("appointments", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["patientId", "doctorId", "date", "time", "status"],
      properties: {
        patientId: {
          bsonType: "objectId",
          description: "must be an objectId and is required",
        },
        doctorId: {
          bsonType: "objectId",
          description: "must be an objectId and is required",
        },
        date: {
          bsonType: "date",
          description: "must be a date and is required",
        },
        time: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        status: {
          enum: ["pending", "confirmed", "cancelled", "completed"],
          description: "must be one of the enum values and is required",
        },
      },
    },
  },
})

// Create indexes for better performance
db.users.createIndex({ email: 1 }, { unique: true })
db.appointments.createIndex({ patientId: 1, date: 1 })
db.appointments.createIndex({ doctorId: 1, date: 1 })

print("Database initialization completed successfully!")
