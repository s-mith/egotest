
export default async function handler(req, res) {
    const {
        query: { user },
        method,
    } = req;

    switch (method) {
        case "GET":
        try {
            const response = await fetch(`https://`+ process.env.API +`:6969/api/tasks`);
            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
        default:
        res.status(400).json({ success: false });
        break;
    }
}
