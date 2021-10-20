import React from 'react'
import BookingsGridItem from './BookingsGridItem'

    const BookingsGrid = ({bookings, onBookingDelete, onCheckin}) => {
        const gridNodes = bookings.map((booking, index) => {
            return <BookingsGridItem booking={booking} key={index} onBookingDelete={onBookingDelete} onCheckin={onCheckin}/>
        })
        return(
            <>
            <p>Bookings Grid</p>
            {gridNodes}
            </>

        )
    }

export default BookingsGrid;