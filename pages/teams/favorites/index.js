import ShowFavourites from "../../../components/ShowFavourites";
import { DummyData } from "../../../data/data";
import Body from "../../../components/Layout/Body";
import Activity from "../../../components/Activity";

export default function Favourites() {
    return (
        <>
            <Body>
                <div className="w-screen h-screen bg-[#E5E5E5]">
                    <ShowFavourites DummyData={DummyData} />
                    <Activity DummyData={DummyData}/>
                </div>
            </Body>
        </>

    )
}