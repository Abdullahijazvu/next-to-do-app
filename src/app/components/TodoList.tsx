import { Todo } from "../lib/drizzle";

// const getData = async () => {
//     try {        
//         const res = await fetch("http://127.0.0.1:3000/api/todo", {
//             method: "GET",
//             cache: "no-store",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         if(!res.ok){
//             return new Error("Something went wrong")
//         }
//         const result = await res.json()
//         console.log(result);
        
//         return result
//     } catch (err) {
//         console.log(err);        
//     }
// }

const TodoList = async() => {
//     const res: {data:Todo[]} = await getData()
//   return (
//     <div className="max-h-[350px] overflow-auto">
//     {res.data.map((item)=>{
//         return(
//     <div className="bg-gray-100 py-4 px-4 flex items-center shadow rounded-lg">
//         <div className="h-3 w-3 bg-secondary rounded-full mr-3"></div>
//             <p className="text-lg font-medium">{item.task}</p>
//     </div>
//         )
//     })}
//     </div>
//   )
}

export default TodoList