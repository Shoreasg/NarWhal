import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Header() {
    const router = useRouter()
    const headerName = router.pathname.replace(/[\/-]+/g, '').charAt(0).toUpperCase() + router.pathname.slice(2).split('/')[0]
    const buttonName = headerName.slice(0, -1)

    return (
        <div className="flex flex-row justify-start w-full h-[146px] top-20 shadow z-0 absolute bg-white">
            <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row justify-start absolute h-full w-2/12 left-32 space-x-10">
                    <div className={`flex flex-col justify-end justify-items-center w-full text-center font-proxima-nova font-semibold text-[18px] ${router.pathname == "/teams/all" ? "text-[#0083E3] border-b-4 border-[#0083E3]" : ""}`}>
                        <Link href={"/teams/all"}>All</Link>
                    </div>
                    <div className={`flex flex-col justify-end justify-items-center w-full text-center font-proxima-nova font-semibold text-[18px] ${router.pathname == "/teams/favorites" ? "text-[#0083E3] border-b-4 border-[#0083E3]" : ""}`}>
                        <Link href={"/teams/favorites"}>Favorites</Link>
                    </div>
                    <div className={`flex flex-col justify-end justify-items-center w-full text-center font-proxima-nova font-semibold text-[18px] ${router.pathname == "/teams/archived" ? "text-[#0083E3] border-b-4 border-[#0083E3]" : ""}`}>
                        <Link href={"/teams/archived"}>Archived</Link>
                    </div>
                </div>
                <div className="flex flex-row ml-32 justify-center mb-10">
                    <div className="flex flex-col justify-center">
                        {headerName === "Teams" ? <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-slate-600/50">
                            <path id="icon-teams" fillRule="evenodd" clipRule="evenodd" d="M28.6875 17H21.25V8.5C21.25 7.8625 20.825 7.4375 20.1875 7.4375H18.0625V5.3125C18.0625 4.675 17.6375 4.25 17 4.25H15.9375V1.0625C15.9375 0.425 15.5125 0 14.875 0C14.2375 0 13.8125 0.425 13.8125 1.0625V4.25H12.75C12.1125 4.25 11.6875 4.675 11.6875 5.3125V7.4375H9.5625C8.925 7.4375 8.5 7.8625 8.5 8.5V20.1875H1.0625C0.425 20.1875 0 20.6125 0 21.25V32.9375C0 33.575 0.425 34 1.0625 34H9.5625H12.75H17H20.1875H28.6875C29.325 34 29.75 33.575 29.75 32.9375V18.0625C29.75 17.425 29.325 17 28.6875 17ZM6.375 29.75H3.1875V27.625H6.375V29.75ZM6.375 26.5625H3.1875V24.4375H6.375V26.5625ZM10.625 29.75H7.4375V27.625H10.625V29.75ZM10.625 26.5625H7.4375V24.4375H10.625V26.5625ZM15.9375 18.0625V31.875H13.8125V21.25C13.8125 20.6125 13.3875 20.1875 12.75 20.1875H10.625V9.5625H12.75C13.3875 9.5625 13.8125 9.1375 13.8125 8.5V6.375H15.9375V8.5C15.9375 9.1375 16.3625 9.5625 17 9.5625H19.125V17H17C16.3625 17 15.9375 17.425 15.9375 18.0625ZM22.3125 29.75H19.125V27.625H22.3125V29.75ZM22.3125 26.5625H19.125V24.4375H22.3125V26.5625ZM22.3125 23.375H19.125V21.25H22.3125V23.375ZM26.5625 29.75H23.375V27.625H26.5625V29.75ZM26.5625 26.5625H23.375V24.4375H26.5625V26.5625ZM26.5625 23.375H23.375V21.25H26.5625V23.375Z" />
                        </svg> : ""}
                        {headerName === "Campaigns" ? <svg width="30" height="34" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-slate-600/50">
                            <path id="icon-campaign" fillRule="evenodd" clipRule="evenodd" d="M0.866667 0H21.6667C22.1459 0 22.5333 0.3874 22.5333 0.866667V15.6C22.5333 16.0793 22.1459 16.4667 21.6667 16.4667H12.4592L5.77027 22.3193C5.512 22.5446 5.14627 22.5949 4.84207 22.4553C4.5318 22.3149 4.33333 22.0073 4.33333 21.6667V16.4667H0.866667C0.3874 16.4667 0 16.0793 0 15.6V0.866667C0 0.3874 0.3874 0 0.866667 0ZM24.2667 6.93333H26.8667C27.3451 6.93333 27.7333 7.3216 27.7333 7.8V20.8C27.7333 21.2784 27.3451 21.6667 26.8667 21.6667H24.2667V25.1333C24.2667 25.4583 24.0855 25.7556 23.7969 25.9038C23.5023 26.0537 23.1573 26.0251 22.8965 25.8379L17.056 21.6667H9.14853L13.1109 18.2H22.5333C23.491 18.2 24.2667 17.4243 24.2667 16.4667V6.93333Z" />
                        </svg> : ""}
                        {headerName === "Contacts" ? <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-slate-600/50">
                            <path id="icon-leads" fillRule="evenodd" clipRule="evenodd" d="M16 6C16 9.237 13.379 13 10 13C6.621 13 4 9.237 4 6C4 2.691 6.691 0 10 0C13.309 0 16 2.691 16 6ZM20 4H31C31.552 4 32 4.447 32 5C32 5.553 31.552 6 31 6H20C19.448 6 19 5.553 19 5C19 4.447 19.448 4 20 4ZM20 10H31C31.552 10 32 10.447 32 11C32 11.553 31.552 12 31 12H20C19.448 12 19 11.553 19 11C19 10.447 19.448 10 20 10ZM31 16H25C24.448 16 24 16.447 24 17C24 17.553 24.448 18 25 18H31C31.552 18 32 17.553 32 17C32 16.447 31.552 16 31 16ZM25 22H31C31.552 22 32 22.447 32 23C32 23.553 31.552 24 31 24H25C24.448 24 24 23.553 24 23C24 22.447 24.448 22 25 22ZM16.409 15.973C12.009 14.671 7.858 14.696 3.583 15.961C1.439 16.596 0 18.523 0 20.758V27C0 27.553 0.448 28 1 28H19C19.552 28 20 27.553 20 27V20.772C20 18.536 18.557 16.607 16.409 15.973Z" />
                        </svg> : ""}
                        {headerName === "Reports" ? <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-slate-600/50">
                            <path id="icon-reports" fillRule="evenodd" clipRule="evenodd" d="M10.2188 6.9375L6.65625 14.0625H0C0.46875 6.1875 6.9375 0 14.9062 0C22.875 0 29.3438 6.1875 29.9062 14.0625H22.5938C22.2188 14.0625 21.9375 14.3438 21.75 14.625L18.75 20.625L11.9062 6.9375C11.625 6.28125 10.5 6.28125 10.2188 6.9375ZM19.5938 23.0625L23.1562 15.9375H29.8125C29.3438 23.8125 22.875 30 14.9062 30C6.9375 30 0.46875 23.8125 0 15.9375H7.21875C7.59375 15.9375 7.875 15.75 8.0625 15.375L11.0625 9.375L17.9062 23.0625C18.0938 23.4375 18.375 23.625 18.75 23.625C19.125 23.625 19.4062 23.3438 19.5938 23.0625Z" />
                        </svg> : ""}
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-[30px] font-semibold font-proxima-nova pl-3">{headerName}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-end w-full">
                <div className="flex flex-col justify-center mb-10">
                    <button className="rounded-lg w-[200px] h-[36px] bg-[#40D2BF] mr-7 flex space-x-4">
                        <Icon icon="bx:plus-medical" color="white" width="16" className='flex flex-col justify-center h-full ml-3' />
                        <p className='flex flex-col justify-center h-full font-proxima-nova text-white text-[14px]'>Create New {buttonName}</p>
                    </button>
                </div>
                <div className="flex flex-col justify-end absolute top-28 right-10 w-max">
                    <div className='flex flex-row'>
                        <Icon icon="ei:search" width={30} className="mr-2" />
                        <input type="search" className="p-1" placeholder={`Search ${buttonName} ...`} />
                    </div>
                </div>
            </div>
        </div>
    )
}