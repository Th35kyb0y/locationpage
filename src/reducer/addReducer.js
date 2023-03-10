const initial="hbbjnj"
 const add=(state=initial, action)=>{
switch(action.type){
case "Add_Value" :
    const updatedData=action.payload
    return state=updatedData
    default : return state
}
}
export default add
