import Mergent from 'mergent'


// could be some API route / getServerSideProps / ...
async function handler (req, res)  {
    const mergent = new Mergent("A4XaV2S3GQbxnQvVswCC");
    try {
        const task = await mergent.tasks
        .create({
          request: {
            headers: { "Content-Type": "application/json" }, // Optional
            url: "https://functions-test-two.vercel.app/api/goodbye",
            body: JSON.stringify({
                name: "John Doe",
                age: "42"
            }) // Optional
          },
          delay: "PT5S"
        })
       console.log({task})
    }catch(err) {
        console.log(err)
    }
    
  res.status(200).send("");
}
export default handler
