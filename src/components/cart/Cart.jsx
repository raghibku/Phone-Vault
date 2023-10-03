import { useEffect, useState } from "react"
import { addOrderToLS, getStoredCart, removeFromLS } from "../utilities/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  
  const [selectedPhones, setSelectedPhones] = useState(null);
  const [del, setDel] = useState(null);

  useEffect(() => {
    const savedIds = getStoredCart();
    setSelectedPhones(savedIds);
  }, [del])

  useEffect(() => {
    console.log(selectedPhones)
  }, [selectedPhones])

  const handleRemoveFromCart = (id) => {
    removeFromLS(id);
    setDel(id);
    toast.info("Phone Removed From Cart");
  }

  const handlePurchase = () => {
    my_modal_1.showModal();
    addOrderToLS();
    localStorage.removeItem("cart")
    setDel('all');
  }

  return (
    <div className="flex flex-col md:flex-row justify-around items-center md:items-start w-full">
      <div className="flex flex-col justify-center items-start mx-4 gap-2 w-[80%] md:w-[70%]">
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
                  <div className=" card-actions justify-start md:justify-between">
                    <button className="btn btn-primary">Details</button>
                    <button onClick={() => handleRemoveFromCart(phone)} className="btn btn-secondary">Remove</button>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="OrderSummaryContainer w-[80%] md:w-[25%] bg-base-200 my-5 p-4 gap-4 mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Order Summary</h1>
        <ol className="list-decimal ml-6">
          {
            selectedPhones && selectedPhones.map((phone) => {
              return (
                <div className="flex justify-between items-center">
                  <li>{phone.phone_name}</li>
                  <p>999$</p>
                </div>
              )
            })
          }
        </ol>
        <h1 className="text-2xl font-semibold my-4">Total Amount: {selectedPhones ? selectedPhones.length * 999 : 0}$</h1>
        <div className="w-full">
          <button onClick={handlePurchase} className="w-full my-4 text-xl btn btn-secondary">Purchase</button>
        </div>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box flex flex-col items-center justify-center">
            <img src="/images/congo.png" alt=""/>
              <h3 className="font-bold text-lg">Congratulations</h3>
              <p className="py-4">Your purchase is complete</p>
              <div className="modal-action">
                <button className="btn bg-pink-500 text-white" >Go Home</button>
              </div>
          </form>
        </dialog>
      </div>
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  )
}

export default Cart