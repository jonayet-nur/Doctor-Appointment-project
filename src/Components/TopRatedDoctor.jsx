import DoctorCard from "@/ui/DoctorCard"


const TopRatedDoctor = async() => {
    const res = await fetch('http://localhost:5000/top-doctors')
    const topDoctors = await res.json()
    console.log(topDoctors)
  return (
    <div className="w-11/12 mx-auto my-10">
        <h2 className="text-4xl font-extrabold text-center text-[#0b8fac] mb-1">Top Rated Doctors</h2>
        <p className="text-center text-gray-600 text-xl mb-8 font-semibold">
            Highly recommended professionals by our patient community
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                topDoctors.map(doctor=><DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>)
            }
        </div>
    </div>
  )
}

export default TopRatedDoctor