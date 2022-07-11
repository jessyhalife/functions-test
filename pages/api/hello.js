// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200)
  fetch(`https://functions-test-two.vercel.app/api/goodbye`)
  res.end()
  
}
