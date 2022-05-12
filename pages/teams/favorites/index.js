import ShowFavourites from "../../../components/ShowFavourites";
import { DummyData } from "../../../data/data";

export default function Favourites ()
{
    return(
        <div className="w-screen h-screen bg-[#E5E5E5]">
            <ShowFavourites DummyData={DummyData} />
        </div>
    )
}