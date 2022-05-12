import Body from "../../../components/Layout/Body";
import ShowAll from "../../../components/ShowAll";
import { DummyData } from "../../../data/data";


export default function All() {

    return (
        <>
            <Body>
                <ShowAll DummyData={DummyData} />
            </Body>
        </>
    )
}