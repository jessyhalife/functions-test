// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  const timestamp = +new Date()
  console.log("hello from hello", timestamp)
  fetch(`https://functions-test-two.vercel.app/api/goodbye`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ timestamp }),
  })
  setTimeout(() => {
    return res.status(200).json({
      status: "bye"
    })
  }, 1000)
  
}

