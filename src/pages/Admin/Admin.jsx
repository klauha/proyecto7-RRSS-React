import "./Admin.css"
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { getUsers } from "../../services/apiCalls"
import { useSelector } from "react-redux"
import { userData } from '../../app/slices/userSlice';

export const Admin = () => {
    const rdxUser = useSelector(userData)
    const [usersData, setUsersData] = useState([])
    // const [usersSelected, setUsersSelected] = useState([])

    const columns = [
        {
            name: "Nombre",
            selector: row => row.firstName
        },
        {
            name: "Apellidos",
            selector: row => row.lastName
        },
        {
            name: "email",
            selector: row => row.email
        },
        // {
        //     name: "Fecha de creación",
        //     selector: row => {
        //         const date = new Date(row.createdAt)
        //         return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
        //     }
        // }
    ]
    // Efecto para obtener los datos de los usuarios cuando el componente se monta
    useEffect(() => {
        const getUserByAdmin = async () => {
            try {
                const users = await getUsers(rdxUser.token)
                setUsersData(users.data)
            } catch (error) {
                console.error("Error al obtener los usuarios:", error)
            }
        }
        getUserByAdmin()
    }, [])
    // const handleRowChange = ({ selectedRows }) => {
    //     setUsersSelected(selectedRows)
    // }




    return (
        <>
            <div className='adminDesign'>
                <div className="tableUser">
                    <DataTable
                        className='table'
                        title="Usuarios"
                        columns={columns}
                        data={usersData}
                        // onSelectedRowsChange={handleRowChange}
                        selectableRows
                        selectableRowsSingle
                        pagination
                        paginationPerPage={5}
                        fixedHeader
                    />
                </div>
            </div >
        </>
    )
}

