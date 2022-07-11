// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200)
  console.log(process.env.VERCEL_URL)
  fetch(`https://${process.env.VERCEL_URL}/api/goodbye`)
  res.end()
  
}
