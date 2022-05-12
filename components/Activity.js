export default function Activity({ DummyData }) {

    const mapDummyData = DummyData.activities.map((data, index) => {
        return (
            <>
                <div className="flex flex-col justify-center ml-8" key={index}>
                    <div className="flex flex-row">
                        <img className="object-cover w-[40px] h-[40px] rounded-full" src={data.person.avatar} />
                        {data.action === "increased_quota" ?
                            <div className="ml-3">
                                <span className="text-[#444444] font-proxima-nova font-bold">{data.person.name}</span>
                                <span className="text-[#444444] font-proxima-nova "> increased</span>
                                <span className="text-[#444444] font-proxima-nova font-bold"> {data.target}</span>
                                <span className="text-[#444444] font-proxima-nova ">'s quota</span>
                                <div>
                                    <span className="text-[#565656] font-proxima-nova opacity-50">{data.created_at}</span>
                                </div>
                            </div>
                            : ""}
                        {data.action === "added_leads" ?
                            <div className="ml-3">
                                <span className="text-[#444444] font-bold">{data.person.name}</span>
                                <span className="text-[#444444] font-proxima-nova "> added new leads to</span>
                                <span className="text-[#444444] font-bold"> {data.target}</span>
                                <div>
                                    <span className="text-[#565656] font-proxima-nova opacity-50">{data.created_at}</span>
                                </div>
                            </div> : ""}
                        {data.action === "archived_team" ? <div className="ml-3">
                            <span className="text-[#444444] font-bold">{data.person.name}</span>
                            <span> archived the team</span>
                            <span className="text-[#444444] font-bold"> {data.target}</span>
                            <div>
                                {data.created_at ? <span className="text-[#565656] font-proxima-nova opacity-50">{data.created_at}</span> : <span className="text-[#565656] font-proxima-nova opacity-50">Time missing</span>}
                            </div>
                        </div> : ""}
                    </div>
                </div>
            </>
        )
    })

    return (
        <div className="w-1/6 h-4/6 right-56 top-64 bg-white shadow-lg rounded-sm border border-gray-200 absolute overflow-auto">
            <div className="flex flex-row h-[10%] border-b">
                <div className="flex flex-row justify-start w-1/2">
                    <div className="flex flex-col justify-center ml-8 font-proxima-nova text-[18px] font-semibold">
                        Activity
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-10 mt-8 mb-12">
                {mapDummyData}
            </div>
        </div>
    )
}