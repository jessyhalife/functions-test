import Mergent from 'mergent'


// could be some API route / getServerSideProps / ...
async function handler (req, res)  {
    const mergent = new Mergent("A4XaV2S3GQbxnQvVswCC");
    mergent.tasks
    .create({
      request: {
        headers: { "Content-Type": "application/json" }, // Optional
        url: "https://functions-test-two.vercel.app/api/queues/email",
        body: JSON.stringify({
            name: "John Doe",
            age: "42"
        }) // Optional
      },
      delay: "PT5S"
    })
    .then((task) => console.log(task))
    .catch((error) => console.error(error));
  res.status(200).send("");
}
export default handler
