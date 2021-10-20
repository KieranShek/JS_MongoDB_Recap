import React, {useState, useEffect} from 'react'
import BookingsForm from '../components/BookingsForm'
import BookingsGrid from '../components/BookingsGrid'
import { deleteBooking, getBookings, postBooking, updateBooking } from '../services/BookingService'

const BookingsContainer = () => {
    const [allBookings, setAllBookings] = useState([])

    useEffect(() => {
        getBookings()
        .then(data => {setAllBookings(data)})
        // console.log("state", allBookings)
    },[])

    const onBookingSubmit = (booking) => {
        postBooking(booking)
    }

    const onBookingDelete = (id) => {
        deleteBooking(id)
    }

    const onCheckin = (booking) => {
        const copyBooking = {...booking}
        delete copyBooking._id
        copyBooking.checkedIn = !copyBooking.checkedIn
        updateBooking(copyBooking, booking._id)
    }

    return(
        <>
        <h1>Hotel Kieran</h1>
        <BookingsGrid bookings = {allBookings} onBookingDelete={onBookingDelete} onCheckin={onCheckin}/>
        <BookingsForm onBookingSubmit={onBookingSubmit}/>
        </>
    
    )
} 

export default BookingsContainer;