const express = require("express");
const url = require("url");
const fetch = require("node-fetch");
const path = require("path");
const URL = url.URL;
const app = express();

const BASE_API_URL = "https://welbi.org";
const TOKEN = process.env.TOKEN;

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

// Proxy api calls to welbi API and add token
const apiHandler = async (req, res) => {
  const url = new URL(req.url, BASE_API_URL);
  const { method, body } = req;
  url.searchParams.set("token", TOKEN);
  console.log(method, url.href, body);
  const apiRes = await fetch(url.href, {
    method,
    body: ["GET", "HEAD"].indexOf(method) >= 0 ? null : JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await apiRes.json();
  console.log(res.statusCode);
  res.statusCode = apiRes.status;
  res.statusMessage = apiRes.statusText;
  return res.json(data);
};

app.get("/api/*", apiHandler);
app.post("/api/*", apiHandler);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 3001);
