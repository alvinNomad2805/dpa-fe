import { error } from "console"

interface MenuList {
    menu_id:number
    title:string
    segment:string
    icon:string
  }

  interface headerresponse{
    status_code:number
    message:string
    data:any[]
  }


const getMenu = async (role_id:number):Promise<headerresponse> => {
    let url = `https://0ea5-103-82-15-213.ngrok-free.app/v1/menu-by-role/${role_id}`
    const ResponseData = await (await fetch(url)).json()
    return ResponseData
}

export default getMenu