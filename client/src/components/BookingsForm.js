import React, {useState} from "react";

    const BookingsForm = ({onBookingSubmit}) => {

        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [checkedIn, setCheckedIn] = useState(false)

        const handleNameChange = (event) => {
            setName(event.target.value)
        }

        const handleEmailChange = (event) => {
            setEmail(event.target.value)
        }

        const handleCheckedInChange = (event) => {
            setCheckedIn(event.target.checked)
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            const booking = {
                name: name,
                email: email,
                checkedIn: checkedIn
            }
            onBookingSubmit(booking)
            setName("")
            setEmail("")
            setCheckedIn(false)
        }

        return(
            <>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="Enter Name" value={name} onChange={handleNameChange}/>
                <input type="text" id="email" placeholder="Enter Email" value={email} onChange={handleEmailChange}/>
                <input type="checkbox" id="checkedIn" placeholder="Checked In" checked={checkedIn} onChange={handleCheckedInChange}/>
                <input type="submit" value="Submit" />
            </form>
            </>
        )
    }


export default BookingsForm;