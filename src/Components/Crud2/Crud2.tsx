import '../../Components/Crud2/Crun2.css'

const Crud2 = ({data,del,hendleopenedit}) => {
    console.log(data);
    
  return (
    <div>
      <table>
        <thead>
            <tr> 
            <th>№</th>
            <th>Img</th>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>Status</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((el,i) => {
                    return <tr className='tr1' key={el.id}>
                        <td>{i+1}</td>
                        <td><img className='img1' src={el.img} alt="" /></td>
                        <td>{el.name}</td>
                        <td>{el.age}</td>
                        <td>{el.job}</td>
                        <td>{el.status?'Active':'Inactive'}</td>
                        <td> <input type="checkbox"/> <button onClick={()=>del(el.id)} className='td1'>Delete</button> <button onClick={()=>hendleopenedit(el)}>Edit</button> </td>
                        </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Crud2
