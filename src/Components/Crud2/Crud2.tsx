import Button from '@mui/material/Button'


const Crud2 = ({ data, del, hendleopenedit }) => {
    return (
        <div className="overflow-x-auto  bg-white shadow-md">
       <table className="w-full min-w-[750px] text-left">
           <thead className="bg-gray-100 text-sm text-gray-600">
               <tr>
       <th className="px-5 py-4">№</th>
       <th className="px-5 py-4">Image</th>
       <th className="px-5 py-4">Name</th>
       <th className="px-5 py-4">Age</th>
       <th className="px-5 py-4">Job</th>
       <th className="px-5 py-4">Status</th>
       <th className="px-5 py-4">Actions</th>
               </tr>
           </thead>
           <tbody>
               {data.map((el, i) => {
       return (
           <tr key={el.id} className="border-b border-gray-100 ">
            <td className="px-5 py-4 text-gray-500">{i + 1}</td>
            <td className="px-5 py-4"><img className="h-12 w-12 rounded-full object-cover" src={el.img} alt={el.name}/></td>
            <td className="px-5 py-4 font-semibold text-gray-800">{el.name}</td>
            <td className="px-5 py-4 text-gray-600">{el.age}</td>
            <td className="px-5 py-4 text-gray-600">{el.job}</td>
            <td className="px-5 py-4">
       <span className={`rounded-full px-3 py-1 text-xs font-semibold ${el.status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
           {el.status ? "Active" : "Inactive"}
       </span>
               </td>
               <td className="px-5 py-4">
       <div className="flex gap-2">
           <Button  onClick={() => hendleopenedit(el)} variant="contained" color="success">Edit</Button >
           <Button  onClick={() => del(el.id)} variant="outlined" color="error">Delete</Button >
       </div>
               </td>
           </tr>
       )
               })}
           </tbody>
       </table>
        </div>
    )
}

export default Crud2
