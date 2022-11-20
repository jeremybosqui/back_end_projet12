import React, {useEffect, useState} from 'react';
import {Head, Icon, Info, Legend, Text, Title, Wrapper} from "../Style/Bar_Charts";
import {getData} from '../Api/Get_Data';
import {useParams} from 'react-router';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import ActivityToolType from './Activity_Tool_User';


/**
 * display the barchart avec les infos récupéré dans le getdata
 * @return {JSX.Element}
 */
 function BarCharts() {

    const [data, setData] = useState([])
	const {id} = useParams()

    useEffect(() => {
            const data = async () => {
                const [request] = await Promise.all([getData("USER_ACTIVITY", id)])
                if (!request) {
                    return alert("data error")
                }
                {
                    const {data: data1} = request;
                    const {sessions} = data1;
                    setData(sessions)
                }
            }
            data().then().catch(
                console.log["something wrong"]
            );
        },
        [id])
	if (data.length === 0) {
        return null
    }
	//format data.day
	for (let i = 0 ; i < data.length ; i ++)
        {data[i].day = i + 1;}
    
    return (  
        <Wrapper>
            <Head>
                <Title>Activité quotidienne</Title>
                <Legend>
					<Info>
						<Icon color='#282D30' />
						<Text>Poids (kg)</Text>
					</Info>
					<Info>
						<Icon color='#E60000' />
						<Text>Calories brûlées (kCal)</Text>
					</Info>
				</Legend>
            </Head>
            <ResponsiveContainer  height={200} >
                <BarChart data={data} barGap={8} barCategoryGap={1}>
                    <CartesianGrid vertical={false} strokeDasharray="1 1"/>
                    <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1"/>
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
                    <Tooltip content={<ActivityToolType/>}/>
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}

export default BarCharts

