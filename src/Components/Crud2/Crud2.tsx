
import React from 'react'
import { Card, Button, Tag } from 'antd'

const Crud2 = ({ data, del, hendleopenedit }) => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {data.map((el, i) => {
          return (
              <Card key={el.id}>
      <div className="text-center">

          <img
              src={el.img}
              alt={el.name}
              className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
          />

          <h2 className="text-xl font-bold">{el.name}</h2>

          <p className="mt-2 text-gray-500">Age: {el.age}</p>

          <p className="mb-3">{el.job}</p>

          <Tag color={el.status ? "green" : "red"}>
              {el.status ? "Active" : "Inactive"}
          </Tag>

          <div className="mt-5 flex justify-center gap-3">
              <Button type="primary" onClick={() => hendleopenedit(el)}>
      Edit
              </Button>

              <Button danger onClick={() => del(el.id)}>
      Delete
              </Button>
          </div>

      </div>
              </Card>
          )
      })}

        </div>
    )
}

export default Crud2
