
const res = await fetch('http://127.0.0.1:9898/produkte')
const data = await res.json()
for (let i = 0; i < data.length; i++) {
    const res = await fetch('http://127.0.0.1:9898/hersteller/' + data[i].hersteller_id)
    data[i].hersteller = await res.json()
    const resKategorie = await fetch('http://127.0.0.1:9898/kategorie/' + data[i].kategorie_id)
    data[i].kategorie = await resKategorie.json()
}
console.log(data)

const parent = document.querySelector('.productlist')
for (const entry of data) {
    const container = document.createElement('div')
    container.classList.add('container')
    const nameC = document.createElement('div')
    nameC.textContent = entry.name
    const discriptionC = document.createElement('div')
    discriptionC.classList.add('description')
    discriptionC.textContent = entry.beschreibung
    const preisC = document.createElement('div')
    preisC.textContent = entry.preis_eur + '€'
    const herstellerC = document.createElement('div')
    herstellerC.textContent = entry.hersteller.name
    container.append(nameC, discriptionC, herstellerC, preisC)
    parent.append(container)
}

//Dieser request erzwugt einne OPTIONS Preflight
// const ress = await fetch('http://127.0.0.1:9898/produkte',
//     {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({ name: 'werner' })
//     }
// )