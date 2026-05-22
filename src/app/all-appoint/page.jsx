import DoctorList from "@/Components/DoctorSearch"
import DoctorCard from "@/ui/DoctorCard"


const AllAppointPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-appointment`)
    const allAppoint = await res.json()
    console.log(allAppoint)

  return (
    <div className="w-11/12 mx-auto my-10">
        <h2 className="text-center font-bold text-4xl">Find Your Doctor</h2>
        <p className="text-center text-gray-600 mb-8">Book an appointment with professional specialists in your area.</p>
           {/* 👇 Search + Cards */}
      <DoctorList doctors={allAppoint} />
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {
        allAppoint.map(appoint=><DoctorCard key={appoint._id} doctor={appoint}></DoctorCard>)
       }
    </div> */}
    </div>
  )
}

export default AllAppointPage