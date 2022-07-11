// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    console.log("hola")
    setTimeout(() => {
        res.status(401).json({ status: "goodbye"})
    }, 6000)
  }
  