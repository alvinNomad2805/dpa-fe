
const getData = async () => {
    let url = 'http://160.19.167.50:3000/v1/classroom'
    const response = await fetch(url,{
        method:'GET'
    })
    if (!response.ok){
        console.error('failed to get the data')
    }
    return response.json()
}

export default getData