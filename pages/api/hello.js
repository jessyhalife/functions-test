// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  
  const timestamp = +new Date()
  console.log("hello from hello", timestamp)
  res.statusCode = 200
  res.end()
  console.log("Start async and see how it goes")
  await test()

}

const test = async () => {
  setTimeout(() => {
    console.log("my execution async")
  }, 10000)
}