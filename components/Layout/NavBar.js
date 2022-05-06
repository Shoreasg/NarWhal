import { Icon } from '@iconify/react';

export default function NavBar() {
    return (
        <div className="w-full h-0">
            <div className="flex flex-row justify-start w-auto h-[80px] border-b ml-[80px]">
                <div className="flex flex-col justify-center relative border-r ">
                    <a className="text-[18px] font-semibold  text-[#1A1919]/50 font-proxima-nova m-12">NARWHAL</a>
                </div>
                <div className="flex flex-col justify-center">
                    <a className="text-[18px] font-normal  text-[#1A1919] font-proxima-nova m-8">Teams</a>
                </div>
                <div className="flex flex-row w-full justify-end h-[80px]">
                    <div className=" flex flex-row space-x-8">
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
                            <p className="text-[14px] font-semibold text-black/50 mr-3">Hello John </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mr-4">
                        <img className="object-cover w-[40px] h-[40px] rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                    <Icon icon="fa:caret-down" color="gray" width="10"  className='mr-12 opacity-50'/>
                    </div>
                </div>
            </div>
        </div>
    )
}