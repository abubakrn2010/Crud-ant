
import React, { useState } from 'react'
import Crud2 from '../Crud2/Crud2'
import Modal from "../Modal/Modal"
import Button from '@mui/material/Button'

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
        <div className="min-h-screen p-4 md:p-8">
        <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
        <h1 className="text-2xl font-bold text-gray-800">Users Management</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your users easily</p>
                </div>
                <Button  onClick={() => setmodaladd(true)} variant="contained">+ Add User</Button>
            </div>

            <Modal open={modaladd}>
                <h2 className="mb-5 text-xl font-bold text-gray-800">Add New User</h2>
                <form onSubmit={handlesubmit} className="grid gap-4">
        <input name="inpname" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" type="text" placeholder="Enter name"/>
        <input name="inpage" required min="1" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" type="text" placeholder="Enter age"/>
        <input name="inpjob" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" type="text" placeholder="Enter job"/>
        <input name="inpimg" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" type="text" placeholder="Image URL"/>
        <select name="inpstatus" defaultValue="true" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500">
            <option value="true">Active</option>
            <option value="false">Inactive</option>
        </select>
        <div className="flex gap-3">
            <button type="submit" className="flex-1 rounded-lg bg-blue-600 py-3 font-semibold text-white ">Add User</button>
            <button type="button" onClick={() => setmodaladd(false)} className="flex-1 rounded-lg bg-gray-200 py-3 font-semibold text-gray-700 ">Cancel</button>
        </div>
                </form>
            </Modal>

            <Modal open={modaledit}>
                <h2 className="mb-5 text-xl font-bold text-gray-800">Edit User</h2>
                <form onSubmit={handleeditsubmit} className="grid gap-4">
        <input defaultValue={nameinp} name="inpname" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" type="text" placeholder="Enter name"/>
        <input defaultValue={ageinp} name="inpage" required min="1" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" type="text" placeholder="Enter age"/>
        <input defaultValue={jobinp} name="inpjob" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" type="text" placeholder="Enter job"/>
        <input defaultValue={imginp} name="inpimg" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" type="text" placeholder="Image URL"/>
        <select name="inpstatus" defaultValue={statusinp} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500">
            <option value="true">Active</option>
            <option value="false">Inactive</option>
        </select>
        <div className="flex gap-3">
            <button type="submit" className="flex-1 rounded-lg bg-blue-600 py-3 font-semibold text-white ">Save Changes</button>
            <button type="button" onClick={() => setmodaledit(false)} className="flex-1 rounded-lg bg-gray-200 py-3 font-semibold text-gray-700 ">Cancel</button>
        </div>
         </form>
     </Modal>

        <Crud2 data={data} del={Deletedata} hendleopenedit={hendleopenedit}/>
            </div>
        </div>
    )
}

export default Get
