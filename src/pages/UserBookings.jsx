import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BookingList from "./BookingList";

const UserBookings = ({onUpdate}) => {
  const [userBookings, setUserBookings] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5002/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserBookings(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = confirm("Are you sure to delete?");
    if (proceed) {
        fetch(`http://localhost:5002/bookings/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = userBookings.filter(booking => booking._id !== id);
            setUserBookings(remaining);
        })
    }
  };
  const handleUpdate = (id)=>{
    console.log(id);
    fetch(`http://localhost:5002/bookings/${id}`,{
        method: "PATCH",
        headers: {
            "Content-type" : "application/json"
        },
        body:JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    
  }
  return (
    <div className="flex items-center justify-center mt-10 mb-10 gap-10">
      {userBookings.map((userBooking) => (
        <BookingList key={userBooking._id} userBooking={userBooking} onDelete={handleDelete} onUpdate={handleUpdate}></BookingList>
      ))}
    </div>
  );
};

export default UserBookings;
