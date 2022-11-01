import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../utils/getData";
import { useParams } from "react-router";
import SideBar from "../components/SideBar";
import UserInfos from "../components/UserInfos";
import {Main, Container, Content, BottomChart} from "../styles/userStyle";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteines-icon.svg";
import glucidesIcon from "../assets/glucides-icon.svg";
import lipidesIcon from "../assets/lipides-icon.svg";
import ScoreChart from "../components/ScoreChart";
import KeyData from "../components/KeyData";
import UserPerformance from "../components/UserPerformance";

/**Render the dashboard
 * @return {JSX.Element}
 */
function PerformPage() {

    const [dataperfom, setDataperform] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const data = async () => {
            const [request] = await Promise.all([getData("USER_MAIN_DATA", id)]);
            if (!request) return alert("data error");
            setDataperform(request["data"]);
        };
        data().then(() => undefined);
    }, [id]);
    if (dataperfom.length === 0) return null;

    return (
        <Main>
            <SideBar />
            <Container>
                <UserInfos name={dataperfom.userInfos.firstName} />
                <Content>
                    <section>
                        <BottomChart>
                            <UserPerformance />
                            <ScoreChart data={dataperfom} />
                        </BottomChart>
                    </section>
                    <aside>
                        <KeyData
                            icon={caloriesIcon}
                            info={`${dataperfom.keyData.calorieCount}kCal`}
                            text="Calories"
                        />
                        <KeyData
                            icon={proteinsIcon}
                            info={`${dataperfom.keyData.proteinCount}g`}
                            text="Proteines"
                        />
                        <KeyData
                            icon={glucidesIcon}
                            info={`${dataperfom.keyData.carbohydrateCount}g`}
                            text="Glucides"
                        />
                        <KeyData
                            icon={lipidesIcon}
                            info={`${dataperfom.keyData.lipidCount}g`}
                            text="Lipides"
                        />
                    </aside>
                </Content>
            </Container>
        </Main>
    )
}


export default PerformPage
