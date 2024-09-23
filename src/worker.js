import { WrakerApp } from "@wraker/core";

const app = new WrakerApp();

app.get("/hello", (_req, res) => {
  res.send("Hello, Worker!");
});

app.listen(() => {
  console.log("[Worker] Worker is running.");
});
