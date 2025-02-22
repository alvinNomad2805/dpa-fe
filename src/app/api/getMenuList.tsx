export interface MenuList {
    segment:string
    title:string
  }

const getMenu = ():any => {
    const fetchedData:MenuList[] = [
        {
            segment: 'schedule',
            title: 'Schedule',
        },
        {
            segment: 'approval-history',
            title: 'Approval History',
        },
    ]   
    return fetchedData
}
export default getMenu