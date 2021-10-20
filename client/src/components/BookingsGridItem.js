import React from "react";

    const BookingsGridItem = ({booking, onBookingDelete, onCheckin}) => {

        const handleDelete = () => {
            onBookingDelete(booking._id)
        }

        const handleCheckIn = () => {
            onCheckin(booking)
        }

        return(
        <>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>{booking.checkedIn.toString()}</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleCheckIn}>{booking.checkedIn ? 'Check Out' : 'Check In'}</button>
        </>
        )}

export default BookingsGridItem;