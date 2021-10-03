import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './userList.css'
import { DeleteOutline } from '@material-ui/icons'
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom'

const UserList = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    const newData = data.filter((row) => row.id !== id)
    setData(newData)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt='avatar' />
            <span>{params.row.username}</span>
          </div>
        )
      },
    },
    { field: 'email', headerName: 'email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='userListAction'>
            <Link to={`/user/${params.row.id}`}>
              <button className='userListEdit'>Edit</button>
            </Link>

            <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      },
    },
  ]

  return (
    <div style={{ height: '90vh', width: '100%' }} className='userList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList
