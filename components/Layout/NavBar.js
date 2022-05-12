import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { DummyData } from "../../data/data";


export default function NavBar() {
    const router = useRouter()
    const pageName = router.pathname.replace(/[\/-]+/g, '').charAt(0).toUpperCase() + router.pathname.slice(2).split('/')[0]
    return (
        <div className="flex flex-row justify-start w-full h-[80px] border-b shadow z-0 absolute bg-white">
            <div className="flex flex-col justify-center border-r ml-20">
                <a className="text-[18px] font-semibold  text-[#1A1919]/50 font-proxima-nova m-12">NARWHAL</a>
            </div>
            <div className="flex flex-col justify-center">
                <a className="text-[18px] font-normal  text-[#1A1919] font-proxima-nova m-8">{pageName}</a>
            </div>
            <div className="flex flex-row w-full justify-end h-[80px]">
                <div className=" flex flex-row space-x-8">
                    <div className="absolute right-48 bottom-10">
                        <div className="rounded-full border object-cover w-[20px] h-[20px] text-center flex flex-col text-white text-xs justify-center bg-[#2995DA]">{DummyData.current_user.notifications_count}</div>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <path d="M4 11V1H20V11" stroke="#444444" strokeWidth="2" strokeLinecap="square" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M23 15V23H1V15H8V18H16V15H23Z" stroke="#444444" strokeWidth="2" strokeLinecap="square" />
                                <path d="M9 6H15" stroke="#444444" strokeWidth="2" strokeLinecap="square" />
                                <path d="M9 10H15" stroke="#444444" strokeWidth="2" strokeLinecap="square" />
                            </g>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-[14px] font-semibold text-black/50 mr-3">Hello, {DummyData.current_user.name} </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center mr-4">
                    <img className="object-cover w-[40px] h-[40px] rounded-full" src={DummyData.current_user.avatar} />
                </div>
                <div className="flex flex-col justify-center">
                    <Icon icon="fa:caret-down" color="gray" width="10" className='mr-6 opacity-50' />
                </div>
            </div>
        </div>
    )
}