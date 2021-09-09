import { FC } from "react"

const Cart: FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item </th>
          <th>Product Name </th>
          <th>Price </th>
          <th>Count</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{1}</td>
          <td>{'best songs ever'}</td>
          <td>{150}</td>
          <th>{2}</th>
          <td>
            <button>Add</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Cart
