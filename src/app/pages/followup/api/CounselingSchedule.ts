interface ScheduleRequest {
    user_id:number
    page:number
    limit:number
}

interface ScheduleResponse {
    counseling_id:number
    counseling_date: string
    counseling_time: string
    counseling_topic: string
    status_name: string
    created_datetime: string
}

export interface ScheduleByIdResponse {
    counseling_id: number
    lecturer_name: string
    counseling_date: string
    counseling_time: string
    counseling_topic: string
    status_name: string
    follow_up_description:string
    follow_up_meeting_type:string
    follow_up_meeting_location:string
}

export interface ScheduleProp {
    status_code:number
    message:string
    total_rows:number
    total_pages:number
    data:ScheduleResponse[]
}

export interface ResponseProp {
    status_code:number
    message:string
    data:ScheduleByIdResponse
}

export const GetCounselingSchedule = async(request:ScheduleRequest):Promise<ScheduleProp> => {
    let url = `http://160.19.167.50:3000/v1/counseling-schedule-list/${request.user_id}?limit=${request.limit}&page=${request.page}`

    const status_response = await fetch(url,{
        method:'GET',
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
    })

    return status_response.json()
}

export const GetCounselingScheduleById = async(id:number):Promise<ResponseProp> =>{
    let url = `http://160.19.167.50:3000/v1/counseling-schedule/${id}`

    const status_response = await fetch(url,{
        method:'GET',
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
    })

    return status_response.json()
}