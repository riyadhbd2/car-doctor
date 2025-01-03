import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider';

const UserBookings = () => {
    const [userBookings, setUserBookings] = useState([]);

    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch(`http://localhost:5002/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            setUserBookings(data);
        })
    },[])
  return (
    <div className='flex items-center justify-center mt-10 mb-10 gap-10'>
        {
            userBookings.map(userBooking => <div key={userBooking._id}>
                <p>Name: {userBooking.name}</p>
                <p>Email: {userBooking.email}</p>
                <p>Amount: {userBooking.amount}</p>
            </div>)
        }
    </div>
  )
}

export default UserBookings