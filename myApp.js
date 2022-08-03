console.log("Hello World")





app.get("/json", (req, res)  => {
  res.json({"message": process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON":  "Hello json" })
});































 module.exports = app;
