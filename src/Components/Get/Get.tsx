import React,{useState} from 'react'
import Crud2 from '../Crud2/Crud2'
import Modal from "../Modal/Modal"

const Get = () => {
    const [data,setdata]=useState([
        {
            id:1,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENR1KLZzIFB6aG-0CUvDNjvNCDc9Vnhj4JUJau2kJRg&s=10',
            name:'Abubakr',
            age:22,
            job:'Frontend Developer',
            status:true
        },
        {
            id:2,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73OboNq8YpolvhWur1kpvkaggtHmHEzhY7RPohICuOA&s=10',
            name:'Ismatullo',
            age:23,
            job:'Backend Developer',
            status:true
        },
        {
            id:3,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73OboNq8YpolvhWur1kpvkaggtHmHEzhY7RPohICuOA&s=10',
            name:'Umar',
            age:22,
            job:'Cliner',
            status:true
        },
        {
            id:4,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73OboNq8YpolvhWur1kpvkaggtHmHEzhY7RPohICuOA&s=10',
            name:'Ali',
            age:22,
            job:'Enginer',
            status:true
        },
    ])

    const [modaladd,setmodaladd]=useState(false)

      const [modaledit,setmodaledit]=useState(false)
    
            const [nameinp,setnameinp]=useState("")
            const [ageinp,setageinp]=useState("")

            const [valinp,setvalinp]=useState(val)
    
            const [idx,setidx]=useState(null)


    const Deletedata=(id:number)=>{
        setdata((prev)=>prev.filter((el) =>el.id!=id ))
    }

       const handlesubmit=(event)=>{
            event.preventDefault()
            const newuser={
                id:Date.now(),
                name:event.target.inpname.value,
                age:event.target.inpage.value,
                job:event.target.inpjob.value
            }
            console.log(newuser)
            setdata((prev)=>[...prev,newuser])
            setmodaladd(false)
        }

            const handleeditsubmit=(event)=>{
            event.preventDefault()
            const newuser={
                id:idx,
                name:event.target.inpname.value,
                age:event.target.inpage.value
            }
            setdata((prev)=>prev.map((el) => el.id==idx?newuser:el))
            setmodaledit(false)
        }


        const hendleopenedit=(e)=>{
            setnameinp(e.name)
            setageinp(e.age)
            setmodaledit(true)
            setidx(e.id)
        }

        const ser=(val)=>{
            setdata(data.filter((el) => {el.name.toLowerCase.includes(val.toLowerCase())}))
        }

  return (
    <div>
        <div>
             <Modal open={modaladd}>

         <form onSubmit={handlesubmit} className="grid p-5 gap-3">
            <input name="inpname" className="px-2 py-1 border-1" type="text" placeholder="name"/>
            <input name="inpage" className="px-2 py-1 border-1"  type="text" placeholder="age"/>
            <input name="inpjob" className="px-2 py-1 border-1"  type="text" placeholder="job"/>
            <button type="submit">submit</button>
            <button onClick={()=>setmodaladd(false)}>Cansel</button>
        </form>
     </Modal>

 <Modal open={modaledit}>

 <form onSubmit={handleeditsubmit} className="grid p-5 gap-3">
            <input defaultValue={nameinp} name="inpname" className="px-2 py-1 border-1" type="text" placeholder="name"/>
            <input defaultValue={ageinp} name="inpage" className="px-2 py-1 border-1"  type="text" placeholder="age"/>
            <button type="submit">submit</button>
            <button onClick={()=>setmodaledit(false)}>Cansel</button>
        </form>
        
     </Modal>

        </div>

        <button  onClick={()=>setmodaladd(true)}>Add USer</button>
        <input  style={{border:'1px solid black'}} onChange={()=>ser()} type="text" placeholder='search'/>
      <Crud2 data={data} del={Deletedata} hendleopenedit={hendleopenedit}/>
    </div>
  )
}

export default Get
