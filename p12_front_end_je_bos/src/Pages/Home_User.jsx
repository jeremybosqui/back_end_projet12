import React from "react";
import home from "../Assets/accueil_image.png"


export default function Home (){

    /*const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('/Datas/DataMain.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setLocations(data)
            })
    }, [])*/

  return (
    <div>
        <img src={home} alt={"img_app_presentation"} style={{width:"800px", height:"600px", marginTop:"100px", marginLeft:"150px"}}/>
    </div>


  )
}

