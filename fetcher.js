
const fetchToDo=async()=>{
  const url="https://dummyjson.com/todos?limit=5"
  const response=await fetch(url)
  const result=await response.json()
  if (!response.ok){
    console.log("err:Failed to fetch the api ",response)
  }

  return result
}
export {fetchToDo}
