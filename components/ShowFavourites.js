import Image from 'next/image'
import React from "react"

export default function ShowFavourites({ DummyData }) {

    let favCount = 0


    const mapDummyData = DummyData.teams.map((data) => {

        data.is_favorited ? favCount++ : ""

        return (
            <React.Fragment key={data.id}>
                {data.is_favorited ? <div className="w-4/5 h-fit border m-10 rounded-md" >
                    <div className="flex flex-row" >
                        <div className="w-fit flex flex-row mt-5 ml-4">
                            <img src={data.image} className="w-1/4 h-fit" />
                            <div className="flex flex-col">
                                <p className="pl-4 text-[#444444] text-[16px] font-proxima-nova font-bold">{data.name}</p>
                                <p className="pl-4 text-[#565656] font-proxima-nova text-[13px] opacity-50">Created on {data.created_at ? data.created_at : "Missing Date"}</p>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-row justify-end mt-5 mr-4">
                        </div>
                    </div>
                    <p className="pl-4 pb-5 pt-5">{data.description}</p>
                    <div className="border-t flex flex-row mix-blend-multiply">
                        <div className="ml-4 mt-5 pb-5">
                            <svg width="20" height="24" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-slate-600  opacity-30">
                                <path id="icon-campaign" fillRule="evenodd" clipRule="evenodd" d="M0.866667 0H21.6667C22.1459 0 22.5333 0.3874 22.5333 0.866667V15.6C22.5333 16.0793 22.1459 16.4667 21.6667 16.4667H12.4592L5.77027 22.3193C5.512 22.5446 5.14627 22.5949 4.84207 22.4553C4.5318 22.3149 4.33333 22.0073 4.33333 21.6667V16.4667H0.866667C0.3874 16.4667 0 16.0793 0 15.6V0.866667C0 0.3874 0.3874 0 0.866667 0ZM24.2667 6.93333H26.8667C27.3451 6.93333 27.7333 7.3216 27.7333 7.8V20.8C27.7333 21.2784 27.3451 21.6667 26.8667 21.6667H24.2667V25.1333C24.2667 25.4583 24.0855 25.7556 23.7969 25.9038C23.5023 26.0537 23.1573 26.0251 22.8965 25.8379L17.056 21.6667H9.14853L13.1109 18.2H22.5333C23.491 18.2 24.2667 17.4243 24.2667 16.4667V6.93333Z" />
                            </svg>
                        </div>
                        <p className="ml-2 mt-5 pb-5 font-proxima-nova text-[15px] opacity-[.45]">{(data.campaigns_count).toLocaleString("en")} Campaigns</p>
                        <div className="ml-4 mt-5 pb-5">
                            <svg width="20" height="24" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-slate-600 opacity-30">
                                <path id="icon-leads" fillRule="evenodd" clipRule="evenodd" d="M16 6C16 9.237 13.379 13 10 13C6.621 13 4 9.237 4 6C4 2.691 6.691 0 10 0C13.309 0 16 2.691 16 6ZM20 4H31C31.552 4 32 4.447 32 5C32 5.553 31.552 6 31 6H20C19.448 6 19 5.553 19 5C19 4.447 19.448 4 20 4ZM20 10H31C31.552 10 32 10.447 32 11C32 11.553 31.552 12 31 12H20C19.448 12 19 11.553 19 11C19 10.447 19.448 10 20 10ZM31 16H25C24.448 16 24 16.447 24 17C24 17.553 24.448 18 25 18H31C31.552 18 32 17.553 32 17C32 16.447 31.552 16 31 16ZM25 22H31C31.552 22 32 22.447 32 23C32 23.553 31.552 24 31 24H25C24.448 24 24 23.553 24 23C24 22.447 24.448 22 25 22ZM16.409 15.973C12.009 14.671 7.858 14.696 3.583 15.961C1.439 16.596 0 18.523 0 20.758V27C0 27.553 0.448 28 1 28H19C19.552 28 20 27.553 20 27V20.772C20 18.536 18.557 16.607 16.409 15.973Z" />
                            </svg>
                        </div>
                        <p className="ml-2 mt-5 pb-5 font-proxima-nova text-[15px] opacity-[.45]">{(data.leads_count).toLocaleString("en")} Leads</p>
                    </div>
                </div> : ""}
            </React.Fragment>
        )
    })

    return (
        <>
            <div className="w-4/6 h-4/6 left-32 top-64 bg-white shadow-lg rounded-sm border border-gray-200 absolute overflow-auto">
                <div className="flex flex-row h-[10%] border-b">
                    <div className="flex flex-row justify-start w-1/2">
                        <div className="flex flex-col justify-center ml-8 font-proxima-nova text-[18px] font-semibold">
                            Favorite Teams
                        </div>
                    </div>
                    <div className="flex flex-row justify-end w-1/2">
                        <div className="flex flex-col justify-center mr-8 ">
                            <span className="font-proxima-nova text-[14px] text-[#7F7F7F]">
                                Showing <span className="font-proxima-nova text-[14px] text-[#7F7F7F]">{favCount}</span> to <span className="font-proxima-nova text-[14px] text-[#7F7F7F]">{favCount}</span> of <span className="font-proxima-nova text-[14px] text-[#7F7F7F]">{favCount}</span> Teams
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    {mapDummyData}
                </div>
            </div>
        </>
    )
}

