import React from 'react'

const BookingList = ({userBooking, onDelete, onUpdate}) => {

    const handleDelete =(id)=>{
        onDelete(id);
    }

    const handleUpdate = (id)=>{
        onUpdate(id);
    }
  return (
    <div>
        <div key={userBooking._id}>
          <p>Name: {userBooking.name}</p>
          <p>Email: {userBooking.email}</p>
          <p>Amount: {userBooking.amount}</p>
          <p>status:{userBooking.status}</p>
          <div className="flex justify-between">
            <button
              onClick={() => handleUpdate(userBooking._id)}
              className="bg-blue-400 text-white px-2 text-sm rounded-lg"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(userBooking._id)}
              className="bg-red-400 text-white px-2 text-sm rounded-lg"
            >
              Delete
            </button>

          </div>
        </div>
    </div>
  )
}

export default BookingList