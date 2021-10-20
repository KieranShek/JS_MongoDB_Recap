use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Kieran",
        email: "kieranshek@gmail.com",
        checkedIn: true
    },
    {
        name: "Craig",
        email: "craig@gmail.com",
        checkedIn: false
    }
]
);