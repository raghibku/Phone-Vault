import { BsFillCalendarEventFill } from 'react-icons/bs';
import { LuRectangleVertical } from 'react-icons/lu';
import {RiCameraLensFill} from 'react-icons/ri'
import {FaMicrochip} from 'react-icons/fa6'
import {BiMicrochip} from 'react-icons/bi'


const Banner = () => {
    return (
        <div className="w-full">
            <div className="carousel w-full text-gray-300">
                <div id="item1" className="carousel-item w-full bg-gradient-to-r from-indigo-500 flex flex-col md:flex-row justify-around items-center p-4">
                    <div className='flex flex-col gap-1'>
                        <h1 className="text-4xl font-bold flex-wrap mb-3 text-gray-100 font-serif">Apple iPhone 14 Pro</h1>
                        <p className='flex text-lg md:text-xl justify-start items-cente gap-3'><span ><BsFillCalendarEventFill/></span>  Released 2022, September 16</p>
                        <p className='flex text-lg md:text-xl justify-start items-center gap-3 '> <span ><BiMicrochip/></span> 128GB/256GB/1TB storage, no card slot</p>
                        <div className='grid grid-cols-3 mt-4'>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='text-2xl md:text-3xl font-semibold text-cyan-300'><LuRectangleVertical/></div>
                                <h1 className='text-2xl md:text-3xl font-semibold'>6.1"</h1>
                                <h2 className='text-md md:text-xl font-extralight'>1179x2556px</h2>
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='text-2xl md:text-3xl font-semibold text-cyan-300'><RiCameraLensFill/></div>
                                <h1 className='text-2xl md:text-3xl font-semibold'>48MP</h1>
                                <h2 className='text-md md:text-xl font-extralight'>2160p</h2>
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='text-2xl md:text-3xl font-semibold text-cyan-300'><FaMicrochip/></div>
                                <h1 className='text-2xl md:text-3xl font-semibold'>6GB RAM</h1>
                                <h2 className='text-md md:text-xl font-extralight'>Apple A16 Bionic</h2>
                            </div>
                        </div>
                    </div>
                    <img src="/images/Banner/apple.png" className="h-[300px]" />
                </div>
                <div id="item2" className="carousel-item w-full bg-gradient-to-r from-indigo-500 flex flex-col md:flex-row justify-around items-center p-4">
                    <div className='flex flex-col gap-1'>
                        <h1 className="text-4xl font-bold flex-wrap mb-3 text-gray-100">Samsung Galaxy S23+</h1>
                        <p className='flex text-lg md:text-xl justify-start items-cente gap-3'><span ><BsFillCalendarEventFill/></span>  Released 2023, February 1</p>
                        <p className='flex text-lg md:text-xl justify-start items-center gap-3 '> <span ><BiMicrochip/></span> 256GB/512GB storage</p>
                        <div className='grid grid-cols-3 mt-4'>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='text-2xl md:text-3xl font-semibold text-cyan-300'><LuRectangleVertical/></div>
                                <h1 className='text-2xl md:text-3xl font-semibold'>6.6"</h1>
                                <h2 className='text-md md:text-xl font-extralight'>1080x2340px</h2>
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='text-2xl md:text-3xl font-semibold text-cyan-300'><RiCameraLensFill/></div>
                                <h1 className='text-2xl md:text-3xl font-semibold'>50MP</h1>
                                <h2 className='text-md md:text-xl font-extralight'>2160p</h2>
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='text-2xl md:text-3xl font-semibold text-cyan-300'><FaMicrochip/></div>
                                <h1 className='text-2xl md:text-3xl font-semibold'>8GB RAM</h1>
                                <h2 className='text-md md:text-xl font-extralight'>Snapdragon 8</h2>
                            </div>
                        </div>
                    </div>
                    <img src="/images/Banner/samsung.png" className="h-[300px]" />
                </div>
                <div id="item3" className="carousel-item w-full bg-gradient-to-r from-indigo-500 flex flex-col md:flex-row justify-around items-center p-4">
                    <div className='flex flex-col gap-1'>
                        <h1 className="text-4xl font-bold flex-wrap mb-3 text-gray-100">Google Pixel 7</h1>
                        <p className='flex text-lg md:text-xl justify-start items-cente gap-3'><span ><BsFillCalendarEventFill/></span>  Released 2022, October 06</p>
                        <p className='flex text-lg md:text-xl justify-start items-center gap-3 '> <span ><BiMicrochip/></span> 128GB storage</p>
                        <div className='grid grid-cols-3 mt-4'>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='text-2xl md:text-3xl font-semibold text-cyan-300'><LuRectangleVertical/></div>
                                <h1 className='text-2xl md:text-3xl font-semibold'>6.7"</h1>
                                <h2 className='text-md md:text-xl font-extralight'>1440x3120px</h2>
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='text-2xl md:text-3xl font-semibold text-cyan-300'><RiCameraLensFill/></div>
                                <h1 className='text-2xl md:text-3xl font-semibold'>50MP</h1>
                                <h2 className='text-md md:text-xl font-extralight'>2160p</h2>
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='text-2xl md:text-3xl font-semibold text-cyan-300'><FaMicrochip/></div>
                                <h1 className='text-2xl md:text-3xl font-semibold'>12GB RAM</h1>
                                <h2 className='text-md md:text-xl font-extralight'>Google Tensor G2</h2>
                            </div>
                        </div>
                    </div>
                    <img src="/images/Banner/google.png" className="h-[300px]" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    )
}

export default Banner