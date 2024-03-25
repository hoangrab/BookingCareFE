export interface Booking {
    id: number,
    doctor: {
        id: number,
        name:string,
        major: string
    },
    name: string,
    dob:string,
    date: string,
    session: string,
    status: string,
    note: string
}

export type BookingDTO = {
    name:string,
    dob:string,
    phone:string,
    email:string,
    gender:string,
    address:string,
    idMojor:number,
    idUser:number,
    date:string,
    session:string;
    note:string,
    status:string
}


export const bookings: Booking[]=[
    {
        "id": 1,
        "doctor": {
            "id": 101,
            "name": "Dr. Smith",
            "major": "Cardiology"
        },
        "name": "John Doe",
        "dob": "1990-05-15",
        "date": "2024-03-20",
        "session": "Morning",
        "status": "Confirmed",
        "note": "Patient complained about chest pain."
    },
    {
        "id": 2,
        "doctor": {
            "id": 102,
            "name": "Dr. Johnson",
            "major": "Dermatology"
        },
        "name": "Jane Smith",
        "dob": "1985-10-28",
        "date": "2024-03-22",
        "session": "Afternoon",
        "status": "Pending",
        "note": ""
    },
    {
        "id": 3,
        "doctor": {
            "id": 103,
            "name": "Dr. Garcia",
            "major": "Oncology"
        },
        "name": "Michael Brown",
        "dob": "1978-07-12",
        "date": "2024-03-25",
        "session": "Morning",
        "status": "Confirmed",
        "note": ""
    },
    {
        "id": 4,
        "doctor": {
            "id": 104,
            "name": "Dr. Kim",
            "major": "Pediatrics"
        },
        "name": "Emily Johnson",
        "dob": "2000-03-02",
        "date": "2024-03-28",
        "session": "Morning",
        "status": "Pending",
        "note": "Patient called to cancel due to a scheduling conflict."
    },
    {
        "id": 5,
        "doctor": {
            "id": 105,
            "name": "Dr. Patel",
            "major": "Neurology"
        },
        "name": "David Lee",
        "dob": "1995-12-09",
        "date": "2024-03-30",
        "session": "Afternoon",
        "status": "Confirmed",
        "note": ""
    }
]
