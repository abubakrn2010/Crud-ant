
import React, { useState } from 'react'
import Crud2 from '../Crud2/Crud2'
import Modal from '../Modal/Modal'
import { Button, Input, Select } from 'antd'

const Get = () => {
    const [data, setdata] = useState([
        { id: 1, img: 'https://i.pravatar.cc/150?img=12', name: 'Abubakr', age: 22, job: 'Frontend Developer', status: true },
        { id: 2, img: 'https://i.pravatar.cc/150?img=13', name: 'Ismatullo', age: 23, job: 'Backend Developer', status: true },
        { id: 3, img: 'https://i.pravatar.cc/150?img=14', name: 'Umar', age: 22, job: 'Cleaner', status: false },
        { id: 4, img: 'https://i.pravatar.cc/150?img=15', name: 'Ali', age: 22, job: 'Engineer', status: true }
    ])

    const [modaladd, setmodaladd] = useState(false)
    const [modaledit, setmodaledit] = useState(false)
    const [nameinp, setnameinp] = useState("")
    const [ageinp, setageinp] = useState("")
    const [jobinp, setjobinp] = useState("")
    const [imginp, setimginp] = useState("")
    const [statusinp, setstatusinp] = useState("true")
    const [idx, setidx] = useState(null)

    const Deletedata = (id) => {
        setdata((prev) => prev.filter((el) => el.id !== id))
    }

    const handlesubmit = (event) => {
        event.preventDefault()

        const newuser = {
       id: Date.now(),
       name: event.target.inpname.value,
       age: Number(event.target.inpage.value),
       job: event.target.inpjob.value,
       img: event.target.inpimg.value || "https://i.pravatar.cc/150",
       status: event.target.inpstatus.value === "true"
        }

        setdata((prev) => [...prev, newuser])
        setmodaladd(false)
        event.target.reset()
    }

    const hendleopenedit = (user) => {
        setnameinp(user.name)
        setageinp(user.age)
        setjobinp(user.job)
        setimginp(user.img)
        setstatusinp(String(user.status))
        setidx(user.id)
        setmodaledit(true)
    }

    const handleeditsubmit = (event) => {
        event.preventDefault()

        const newuser = {
       id: idx,
       name: event.target.inpname.value,
       age: Number(event.target.inpage.value),
       job: event.target.inpjob.value,
       img: event.target.inpimg.value || "https://i.pravatar.cc/150",
       status: event.target.inpstatus.value === "true"
        }

        setdata((prev) => prev.map((el) => el.id === idx ? newuser : el))
        setmodaledit(false)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
       <div className="mx-auto max-w-6xl">

           <div className="mb-6 flex items-center justify-between">
      <div>
          <h1 className="text-2xl font-bold">Users Management</h1>
          <p className="text-gray-500">Manage your users easily</p>
      </div>

      <Button type="primary" onClick={() => setmodaladd(true)}>
          + Add User
      </Button>
           </div>

           <Modal open={modaladd}>
      <h2 className="mb-5 text-xl font-bold">Add New User</h2>

      <form onSubmit={handlesubmit} className="grid gap-4">

          <Input name="inpname" required  placeholder="Enter name"/>

          <Input name="inpage" required type="text" min="1"  placeholder="Enter age"/>

          <Input name="inpjob" required  placeholder="Enter job"/>

          <Input name="inpimg"  placeholder="Image URL"/>

          <select name="inpstatus" defaultValue="true" className="w-full rounded-lg border p-3">
     <option value="true">Active</option>
     <option value="false">Inactive</option>
          </select>

          <div className="flex gap-3">
     <Button htmlType="submit" type="primary" className="flex-1">
         Add User
     </Button>

     <Button onClick={() => setmodaladd(false)} className="flex-1">
         Cancel
     </Button>
          </div>

      </form>
           </Modal>

           <Modal open={modaledit}>
      <h2 className="mb-5 text-xl font-bold">Edit User</h2>

      <form onSubmit={handleeditsubmit} className="grid gap-4">

          <Input defaultValue={nameinp} name="inpname" required  placeholder="Enter name"/>

          <Input defaultValue={ageinp} name="inpage" required type="text" min="1"  placeholder="Enter age"/>

          <Input defaultValue={jobinp} name="inpjob" required  placeholder="Enter job"/>

          <Input defaultValue={imginp} name="inpimg" placeholder="Image URL"/>

          <select name="inpstatus" defaultValue={statusinp} className="w-full rounded-lg border p-3">
     <option value="true">Active</option>
     <option value="false">Inactive</option>
          </select>

          <div className="flex gap-3">
     <Button htmlType="submit" type="primary" className="flex-1">
         Save Changes
     </Button>

     <Button onClick={() => setmodaledit(false)} className="flex-1">
         Cancel
     </Button>
          </div>

      </form>
           </Modal>

           <Crud2 data={data} del={Deletedata} hendleopenedit={hendleopenedit}/>

       </div>
        </div>
    )
}

export default Get
