import { useEffect, useState } from "react";
import { getStoredCart, getStoredOrder } from "../utilities/localStorage";


const OrderedProducts = () => {
  const [selectedPhones, setSelectedPhones] = useState(null);
  

  useEffect(() => {
    const savedIds = getStoredOrder();
    setSelectedPhones(savedIds);
  }, [])

  useEffect(() => {
    console.log(selectedPhones)
  }, [selectedPhones])



  return (
    <div className="w-full"> 
      <h1 className="text-3xl font-bold text-center">Products You Ordered</h1>
      <div className="w-full ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {
            selectedPhones && selectedPhones.map((phone) => {
              return (
                <div key={phone.slug} className="w-[90%] mx-auto bg-base-300 my-5 shadow-xl px-8 pb-8 flex flex-col md:flex-row justify-center items-center">
                  <div className="bg-gray-300 mt-8 rounded-lg flex justify-center items-center">
                    <img src={phone.image} alt={phone.slug} className="px-4 py-4 " />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{phone.phone_name}</h2>
                    <p className="text-xl font-semibold">Price: 999$ </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default OrderedProducts