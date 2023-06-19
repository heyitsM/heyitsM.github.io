import TopBar from "../components/TopBar";
import BodyGrid from "../components/BodyGrid/BodyGrid";

export default function Main() {
    return (
        <>
            <TopBar active="main" />
            <BodyGrid active="main" />
        </>
    );
}