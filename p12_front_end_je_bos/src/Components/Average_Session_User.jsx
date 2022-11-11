import React, {useEffect, useState} from "react";
import {Container, Title} from "../Style/userAverageSessionStyle";
import {getData} from '../Api/getData';
import {useParams} from "react-router";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import SessionsToolType from "./Session_Tool_User.jsx";


/**
 *
 * @return {JSX.Element}
 */

function UserAverageSessions() {

    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const data = async () => {
            const [request] = await Promise.all([getData("USER_AVERAGE_SESSIONS", id)])
            if (!request) {
                return alert("data error")
            }
            const formatData = request["data"].sessions.map((data) => {

                switch (data.day) {
                    case 1: return { ...data, day: "L" };
                    case 2: return { ...data, day: "M" };
                    case 3: return { ...data, day: "M" };
                    case 4: return { ...data, day: "J" };
                    case 5: return { ...data, day: "V" };
                    case 6: return { ...data, day: "S" };
                    case 7: return { ...data, day: "D" };
                    default: return { ...data };
                }
            });
            setData(formatData)
        }
        data().then().catch(
            console.log["something went wrong"]
        )
    }, [id])
    if (data.length === 0) {
        return null
    }

    return (
        <Container>
            <Title>Durée moyenne des sessions</Title>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} strokeWidth={1}
                           onMouseMove={(e) => {
                               if (e.isTooltipActive === true) {
                                   let div = document.querySelector('.bUPtxZ')
                                   let windowWidth = div.clientWidth
                                   let mouseXpercentage = Math.round(
                                       (e.activeCoordinate.x / windowWidth) * 100
                                   )
                                   div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                               }
                           }}
                >
                    <XAxis
                        type="category"
                        dataKey="day"
                        tickLine={true}
                        stroke="red"
                        padding={{right:5, left:5}}
                        tick={{ fontSize: 13, stroke: "white", opacity: 0.8}}
                    />
                    <YAxis
                        dataKey="sessionLength"
                        domain={[0, "dataMax + 30"]}
                        hide={true}
                    />
                    <Tooltip content={<SessionsToolType />} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default UserAverageSessions
