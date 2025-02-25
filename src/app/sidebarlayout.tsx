import MySidebar from "./components/sidebar"

interface sidebarprops {
    Page?:string
    User?:string
}

const PageTemplate = (props:sidebarprops) =>{
    return(
        <MySidebar{...props}></MySidebar>
    )
}

export default PageTemplate