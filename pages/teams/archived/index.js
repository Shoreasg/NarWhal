import Body from "../../../components/Layout/Body";
import ShowArchived from "../../../components/ShowArchived";
import { DummyData } from "../../../data/data";

export default function Archived() {
    return (
        <>
            <Body>
                <div className="w-screen h-max bg-[#E5E5E5]">
                    <ShowArchived DummyData={DummyData} />
                </div>
            </Body>
        </>
    )
}