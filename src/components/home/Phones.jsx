import { useState } from "react"
import { useEffect } from "react"
import { addToLS } from "../utilities/localStorage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Phones = (props) => {
    const navigate = useNavigate();
    const {searchIp} = props;
    const [phones, setPhones] = useState(null);
    const [searchText, setSearchText] = useState('iphone');

    useEffect(()=>{
        setSearchText(searchIp)
        
    },[searchIp])

    useEffect(() => {
        console.log(searchText)
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
            .then(res => res.json())
            .then(data => setPhones(data.data))
    }, [searchText])

    const handleAddToCart=(phone)=>{
        addToLS(phone);
        toast.success("Phone Added To Cart");
    }

    return (
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                phones && phones.map((phone)=>{ 
                    return <div key={phone.slug} className="card card-compact w-80 mx-auto bg-base-300 my-4 shadow-xl px-8">
                        <div className="bg-gray-300 mt-8 rounded-lg flex justify-center items-center">
                            <img src={phone.image} alt={phone.slug} className="px-4 py-4 " />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{phone.phone_name}</h2>
                            <p className="text-xl font-semibold">Price: 999$ </p>
                            <div className="card-actions justify-between">
                                <button onClick={() => { navigate(`/phone-details/${phone.slug}`) }} className="btn btn-primary">Details</button>
                                <button onClick={()=>handleAddToCart(phone)} className="btn btn-secondary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                })
            
            }
            <ToastContainer autoClose={2000} theme="dark" />
        </div>
    )
}

export default Phones