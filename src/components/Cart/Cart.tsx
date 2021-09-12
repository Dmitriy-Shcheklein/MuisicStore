import { FC } from "react"
import { useActions } from "../../hooks/useActions";
import useTypeSelector from "../../hooks/usetypeSelector";
import { CartItems } from "../../types/albumsTypes";

const Cart: FC = () => {

  const { cartList } = useTypeSelector(state => state.albums)

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <RowTable
          cartList={cartList}
        />
      </tbody>
    </table>
  )
}

export default Cart

interface RowTableProps {
  cartList: CartItems[]
}

const RowTable: FC<RowTableProps> = (props) => {

  const { cartList } = props;

  const { addItemToCart } = useActions();

  return (
    <>
      {
        cartList.map((item, idx) => {
          return (
            <tr key={item.id}>
              <td>{idx + 1}</td>
              <td>{item.userId}{item.title}</td>
              <td>{item.totalPrice}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => addItemToCart(item.id)}
                  type='button'
                >Add</button>
                <button>Decrease</button>
                <button>Delete</button>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}



//import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function Cart() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }


