// define 3 different routes for this API
// @app.route('/user/<name>', methods=['GET'])
// def get_one_user(name):
//     user = mkuser(userCollection.find_one({'name': name}))
//     if user:
//         output = {'name': user.name}
//     else:
//         output = 'No results found'
//     return jsonify({'result': output})

// @app.route('/user', methods=['POST'])
// def add_user():
//     user = User(request.json['name'], request.json['password'])
//     userCollection.insert_one(user.mkjson())
//     return jsonify({'result': 'success'})

// @app.route('/user/<name>', methods=['DELETE'])
// def delete_user(name):
//     user = mkuser(userCollection.find_one({'name': name}))
//     if user:
//         if user.login(request.json['name'], request.json['password']):
//             userCollection.delete_one(user)
//             return jsonify({'result': 'success'})
//     else:
//         return jsonify({'result': 'failure'})

// the ip that is hosting the script above is http://127.0.0.1:5005


    

export default async function handler(req, res) {
    const {
        query: { user },
        method,
    } = req;
    
    switch (method) {
        case "GET":
        try {
            const response = await fetch(`https://`+ process.env.API +`:5005/user/${user}`);
            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
        case "DELETE":
        try {
            const response = await fetch(`https://`+ process.env.API +`:5005/user/${user}`, {
                method: "DELETE",
                body: JSON.stringify(req.body),
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    name: req.body.name,
                    password: req.body.password,
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

