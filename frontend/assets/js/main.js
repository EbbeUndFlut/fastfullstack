
const res = await fetch('http://127.0.0.1:9898/produkte')
const data = await res.json()
console.log(data)


const ress = await fetch('http://127.0.0.1:9898/produkte',
    {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name: 'werner' })
    }
)