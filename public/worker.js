import { WrakerApp } from "wraker";

const app = new WrakerApp();

app.get("/hello", (req, res) => {
  res.send("Hello, Worker!");
});

app.listen(() => {
  console.log("[Worker] Worker is running.");
});
