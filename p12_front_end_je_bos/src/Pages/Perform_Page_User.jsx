import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../Api/Get_Data";
import { useParams } from "react-router";
import SideBar from "../Utils/Side_Bar";
import UserInfos from "../Components/Infos_User";
import {Main, Container, Content, BottomChart} from "../Style/Style_User";
import caloriesIcon from "../Assets/BurnKcls.svg";
import proteinsIcon from "../Assets/Proteins.svg";
import glucidesIcon from "../Assets/Glucid.svg";
import lipidesIcon from "../Assets/lipides-icon.svg";
import ScoreChart from "../Components/Score_Chart_User";
import KeyData from "../Components/Data_Key";
import UserPerformance from "../Components/Performance_User";

/**Render the dashboard
 * @return {JSX.Element}
 */
function PerformPage() {

    const [dataperfom, setDataperform] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const data = async () => {
            const [request] = await Promise.all([getData("USER_MAIN_DATA", id)])
            if (!request) {
                return alert("data error")
            }
            setDataperform(request["data"])
        }
        data().then().catch(
            console.log["something went wrong"]
        )
    }, [id])
    if (dataperfom.length === 0) {
        return null
    }

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
