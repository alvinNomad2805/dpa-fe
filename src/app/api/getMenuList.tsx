import { error } from "console"

interface MenuList {
    menu_id:number
    title:string
    segment:string
    icon:string
  }

  interface headerresponse{
    data:MenuList[]
  }


const getMenu = async ():Promise<headerresponse> => {
    let url = `https://0ea5-103-82-15-213.ngrok-free.app/v1/menu-by-role/2`
    const ResponseData = await (await fetch(url)).json()
    return ResponseData
}

export default getMenu