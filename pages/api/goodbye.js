// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const timestamp = req.body.timestamp
    console.log("goodbye from", timestamp)
    setTimeout(() => {
        res.status(401).json({ status: "goodbye"})
    }, 6000)
  }
  