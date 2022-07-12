
export const handler = async (req, res) => {
    console.log("email handler", req.body);
    res.status(200).json({
        message: "queued"
    })
}