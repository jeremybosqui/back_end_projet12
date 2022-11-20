import React, {useEffect, useState} from "react";

import {useParams} from "react-router";
import SideBar from "../Utils/Side_Bar";
import UserInfos from "../Components/Infos_User";
import {BottomChart, Container, Content, Main} from "../Style/Style_User";
import caloriesIcon from "../Assets/BurnKcls.svg";
import proteinsIcon from "../Assets/Proteins.svg";
import glucidesIcon from "../Assets/Glucid.svg";
import lipidesIcon from "../Assets/lipides-icon.svg";
import BarCharts from "../Components/Bar_Chart";
import ScoreChart from "../Components/Score_Chart_User";
import KeyData from "../Components/Data_Key";
import UserAverageSessions from "../Components/Average_Session_User";
import UserPerformance from "../Components/Performance_User";
import Error from "./Error_404";

/** display les infos principals du user suivant l'id
 * @return {JSX.Element}
 */
 function User() {

  /*const [dataUser, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const data = async () => {
        const [request] = await Promise.all([getData("USER_MAIN_DATA", id)])
      if (!request) {
          return alert("data error")
      }
        const {data: data1} = request;
        setData(data1)
    }
    data().then(() => undefined)
        .catch(console.log["something wrong"])
  }, [id])
  if (dataUser.length === 0) {
      return null
  }*/

    const [dataUser, setData] = useState({keyData:{'calorieCount':'','proteinCount':'','carbohydrateCount':'','lipidCount':''}, userInfos:{'lastName':'', 'firstName':''},todayScore:[], score:[]});

    const { id } = useParams();

    useEffect (function (){
        fetch('/Datas/DataMain.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for (let i=0; i<data.length; i++){
                    if (data[i].id === id){
                        setData(data[i])
                        console.log("response ok")
                    }
                }
            })
            .catch(console.log["error on APi"])
    },[id]);


  return dataUser.id === id ? (
    <Main>
        <SideBar />
      <Container>
      <UserInfos name={dataUser.userInfos.firstName + ' ' + dataUser.userInfos.lastName} />
      <Content>
          <section>
            <BarCharts />
            <BottomChart>
              <UserAverageSessions />
              <UserPerformance />
              <ScoreChart data={dataUser} />
            </BottomChart>
          </section>
          <aside>
            <KeyData
              icon={caloriesIcon}
              info={`${dataUser.keyData.calorieCount}kCal`}
              text="Calories"
            />
            <KeyData
              icon={proteinsIcon}
              info={`${dataUser.keyData.proteinCount}g`}
              text="Proteines"
            />
            <KeyData
              icon={glucidesIcon}
              info={`${dataUser.keyData.carbohydrateCount}g`}
              text="Glucides"
            />
            <KeyData
              icon={lipidesIcon}
              info={`${dataUser.keyData.lipidCount}g`}
              text="Lipides"
            />
          </aside>
        </Content>
      </Container>
    </Main>
  ) : <Error />
}

export default User
