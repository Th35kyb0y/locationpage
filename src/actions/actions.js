// we are making add action that will add input box value in global store that can access any component of app

export const add=(data)=>{
    return {
        type:"Add_Value",
        payload:{
            data
        }
    }
}
