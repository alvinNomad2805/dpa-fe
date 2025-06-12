export interface LoginRequest {
    user_email_address:string
    user_password:string
}

interface LoginDetail {
    user_id:number
    user_fullname:string
    role_id:number
}

interface LoginResponse {
    token:string
    user_data:LoginDetail
}

export interface LoginProps {
    status_code:number
    message:string
    data:LoginResponse
}

const LoginUser = async(request:LoginRequest):Promise<LoginProps> => {
    let url = 'http://160.19.167.50:3000/v1/login'

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
    
    return response.json() as Promise<LoginProps>

}

export default LoginUser