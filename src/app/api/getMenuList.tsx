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
    let url = `http://127.0.0.1:5000/v1/role-dropdown`
    const ResponseData = await (await fetch(url)).json()
    return ResponseData
}

export default getMenu