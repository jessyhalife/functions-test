// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200)
  console.log("hello from hello")
  fetch(`https://functions-test-two.vercel.app/api/goodbye`)
  setTimeout(() => {
    res.end()
  }, 1000)
  
}
