
export interface schedulePost{
    user_id:number
    counseling_date?:string
    counseling_time?:string
    counseling_topic?:string
}
const postNewSchedule = async(request:schedulePost)=> {
    let url = `http://160.19.167.50:3000/v1/counseling-schedule`
    const response = await fetch(url,{
        method:'POST',
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(request)
    })
    if (!response.ok){
            const errorText = await response.text();
            throw new Error(`HTTP error ${response.status}: ${errorText}`);
        }
        
    return response.json()
}

export default postNewSchedule