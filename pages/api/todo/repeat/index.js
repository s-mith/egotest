


export default async function handler(req, res) {
    const {
        query: { user },
        method,
    } = req;

    switch (method) {
        case "GET":
        try {
            const response = await fetch(`http://`+ process.env.API +`:6969/api/repeat`);
            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
        case "POST":
        try {
            const response = await fetch(`http://`+ process.env.API +`:6969/api/repeat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({ 
                    password: req.body.password,
                    title: req.body.title,
                    due: req.body.due,
                    repeat: req.body.repeat,
                    description: req.body.description,
                })
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
