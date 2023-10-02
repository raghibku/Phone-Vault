import {FaLocationDot} from 'react-icons/fa6'
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-primary-content">
            <aside>
                <p className="font-bold">
                   <span className="text-3xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">The Phone Vault </span>
                    
                </p>
                <p className='flex flex-col items-center md:flex-row gap-4 text-lg'>
                    <span>Providing reliable tech since 2016</span>
                    <span className='flex items-center'><FaLocationDot/>Road 9, Block-A, Banani, Dhaka</span>
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
        </footer>
    )
}

export default Footer