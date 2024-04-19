import express from "express"
const app = express()
const port = 4000

// app.get('/post', (req, res) => {
//   res.send('post')
// })

// app.get("/", (req, res) => [
//   res.send("root routes")
// ])

// app.get("/user", (req, res) => [
//   res.send("user")
// ])

// app.get("/post", (req, res) => [
//   res.send("post")
// ])
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.get('/post', (req, res) => {
  res.send('post')
})

app.post("/", (req, res) => [
  res.send("post root routes")
])

app.post("/user", (req, res) => [
  res.send("post user")
])

app.post("/post", (req, res) => [
  res.send("post")
])
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})