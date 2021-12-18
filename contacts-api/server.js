const express = require("express");
const { Sequelize, DataTypes, Model } = require("sequelize");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const path = require("path");
const contacts = require("./contacts");

const app = express();

app.use(express.static("public"));
app.use(cors());

const user = process.env.POSTGRES_USER;
const pwd = process.env.POSTGRES_PASSWORD;
const db = process.env.POSTGRES_DB;
const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT;

const connectionURL = `postgres://${user}:${pwd}@${host}:${port}/${db}`

console.log( `Connection URL: ${connectionURL}` );
const sequelize = new Sequelize(connectionURL);

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    avatarURL: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

app.use((req, res, next) => {
  const token = req.get("Authorization");

  if (token) {
    req.token = token;
    next();
  } else {
    res.status(403).send({
      error:
        "Please provide an Authorization header to identify yourself (can be whatever you want)",
    });
  }
});

app.get("/contacts", async (req, res) => {
  const contacts_ret = await contacts.get(User);
  res.send(contacts_ret);
});

app.delete("/contacts/:id", async (req, res) => {
  contact = await contacts.remove(User, req.params.id);
  
  res.send( {contact} );
});

app.post("/contacts", bodyParser.json(), async (req, res) => {
  const { name, email } = req.body;

  if (name && email) {
    console.log("ENTERS");
    const contact = await contacts.add(User, req.body)
    console.log("EXIT");
    res.send(contact);
  } else {
    res.status(403).send({
      error: "Please provide both a name and an email address",
    });
  }
});

app.listen(config.port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log("Server listening on port %s, Ctrl+C to stop", config.port);
    await contacts.add(User, {name: process.env.POSTGRES_USER, email: `${process.env.POSTGRES_USER}@test.com`})

  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
