'use client';

import { removeUser } from '@/store/userReducer';
// import users from '@/data';
import { useDispatch, useSelector } from 'react-redux';

export default function Users(){

    let dispatch = useDispatch();

    let users = useSelector(function(store){
        return store.userData.users
    })

    return <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>                
            </thead>

            <tbody>
                {
                  users.map(function(user){
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={function(){

                                dispatch( removeUser(user.id) )
                                
                            }}>Delete</button>
                        </td>
                    </tr>
                  })  
                }
            </tbody>

        </table>
    </div>
}