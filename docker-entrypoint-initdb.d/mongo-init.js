db.createUser(
    {
        user: 'mongoadmin1',
        pwd: 'mongoadmin1',  
        roles: [
            { role: "readWrite", db: "car" },
        ]
    }
);