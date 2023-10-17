    

export default async function handler(req, res) {
    const {

        method,
    } = req;

    
    switch (method) {
        case "POST":
        try {
            // make a post request to the api with the user and password in the body
            const response = await fetch(`https://`+ process.env.API +`:5005/user`, {
                method: "POST",
                body:JSON.stringify({
                    "name": req.body.name,
                    "password": req.body.password,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                
            });
            const data = await response.json();
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
        default:
        res.status(400).json({ success: false });
        break;
    }
}
