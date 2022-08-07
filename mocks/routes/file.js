const  FILES = [
    {
        id: 1,
        name: 'test.txt',
        ownerAccount: 'GrantHuang',
        ownerName: '黃冠儒',
        fileKey: 'text.txt',
        expiry: new Date(),
    },
    {
        id: 2,
        name: 'random.txt',
        ownerAccount: 'GrantHuang',
        ownerName: '黃冠儒',
        fileKey: 'random.txt',
        expiry: new Date(),
    },
]

module.exports = [
    {
        id: "get-files",
        url: `/api/files/:account/:fileKey`,
        method: 'GET',
        variants: [
            {
                id: 'success',
                type: "middleware",
                options: {
                    middleware: (req, res) => {
                        console.log(req.params.account)
                        console.log(req.params.fileKey)
                        const params = req.params
                        const fileInfo = FILES.find((item) => {
                            return item.ownerAccount === params.account && 
                                item.fileKey == params.fileKey
                        })
                        if(fileInfo){
                            res.status(200).send(fileInfo)
                        }else{
                            res.status(400).send({
                                message: "File not found !!"
                            })
                        }
                    }
                }
            }
        ]
    }
]