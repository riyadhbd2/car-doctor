import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Booking = () => {
  const bookingData = useLoaderData();

  const {user} = useContext(AuthContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const amount = form.amount.value;
    const booking = {
        name,
        date,
        email,
        amount
    }
    console.log(booking);
    fetch('http://localhost:5002/bookings', {
        method: 'POST',
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(booking)

    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
  }

  return (
    <div className="text-center mt-10 mb-10 border p-10 flex flex-col items-center">
      <h1 className="text-3xl">Title: {bookingData.title}</h1>
      <p className="text-xl">Price: {bookingData.price}</p>
      <p>Description: {bookingData.description}</p>
      <form onSubmit={handleSubmit} className="border w-60 flex flex-col items-center justify-center mt-10 p-6 rounded-lg">
        <h1 className="text-xl font-bold">Confirm Order</h1>
        <div className="flex flex-col text-start">
          <p>Name: </p>
          <input
            className="border border-green-400"
            type="text"
            name="name"
            id=""
            placeholder="name"
          />
          <p>Date: </p>
          <input
            className="border border-green-400"
            type="date"
            name="date"
            id=""
            placeholder="date"
          />
          <p>Email: </p>
          <input
            className="border border-green-400"
            type="email"
            name="email"
            defaultValue={user && user.email}
            id=""
            placeholder="email"
          />
          <p>Amount: </p>
          <input
            className="border border-green-400"
            type="text"
            name="amount"
            defaultValue={bookingData.price}
            id=""
            placeholder="amount"
          />
          <button className="bg-orange-500 text-white mt-3 rounded-lg" type="submit"> Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default Booking;
