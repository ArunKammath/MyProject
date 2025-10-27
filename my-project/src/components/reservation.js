import { useState } from "react";


function Reservations() {
    const [booking, setBooking] = useState({
        date: "",
        time: "",
        occasion: "",
    });

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted booking:", booking);
        // Reset form after submission
        setBooking({
            date: "",
            time: "",
            occasion: "",
        });
    };
  return (
    <form id="reservations" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={booking.date} onChange={handleChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={booking.time} onChange={handleChange}>
        <option value="">Select a time</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={booking.occasion} onChange={handleChange}>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />  
    </form>
  );
}
export { Reservations };