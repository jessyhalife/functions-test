// could be some API route / getServerSideProps / ...

const promis = () => new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("HERE")
         resolve("Hello World");
      }, 3000);
   }
);

async function handler (req, res)  {
   await promis()

   res.status(200).send("got it!");
  
}
export default handler
