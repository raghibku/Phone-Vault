import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PhoneDetails = () => {
    const { id } = useParams();
    const [phone, setPhone] = useState(null);
    const navigate=useNavigate();
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
            .then(res => res.json())
            .then(data => setPhone(data.data))
    }, [])
    return (

        <div className="w-full">
            {phone ?
                <div className="w-full flex flex-col md:flex-row justify-around items-center">
                    <div className="w-[70%] md:w-[30%] flex justify-center items-center">
                        <div className="bg-gray-300 px-8 py-3 rounded-xl">
                            <img src={phone.image} alt="" />
                        </div>
                    </div>
                    <div className="w-[70%]">
                        <h3 className="text-4xl font-bold flex-wrap mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 font-serif">{phone.name}</h3>
                        <p className=" text-2xl pb-2">This exclusive phone is available at our shop</p>
                        <p className="text-xl pb-1"><span className="font-bold text-cyan-400">Storage:</span>{phone?.mainFeatures?.storage}</p>
                        <p className="text-xl pb-1"><span className="font-bold text-cyan-400">Display Size:</span>{phone?.mainFeatures?.displaySize}</p>
                        <p className="text-xl pb-1"><span className="font-bold text-cyan-400">Chipset:</span>{phone?.mainFeatures?.chipSet}</p>
                        <p className="text-xl"><span className="font-bold text-cyan-400">Memory: </span>{phone?.mainFeatures?.memory}</p>

                        <div className="my-4">

                            <button onClick={()=>{navigate(-1)}} className="btn btn-secondary">Go Back</button>
                        </div>
                    </div>

                </div>
                : <div className="w-full flex justify-center items-center">
                    <span className="loading loading-dots loading-lg text-cyan-400"></span>
                </div> 
            }

        </div>
    )
}

export default PhoneDetails