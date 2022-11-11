/*import de l'Api via le port 3003 qui affichera les user infos récupéré via celui-ci*/
import { getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } from "./ApiCall";
/*import effectuer via le fichier data-mocked present dans le dossier Api*/
// import { getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } from "./dataMocked";


  /**
   * instancier l'export de getData pour récupéré les user infos
   * @param {string} type 
   * @param {string} id
   * @returns {Array}
   */

 export const getData = async (type, id) => {
    let data = [];

    switch (type) {
      case "USER_ACTIVITY":
        [data] = await Promise.all([getUserActivity(id)]);
          break;
      case "USER_PERFORMANCE":
        data = await getUserPerformance(id);
        break;
      case "USER_AVERAGE_SESSIONS":
        data = await getUserAverageSessions(id);
        break;
      case "USER_MAIN_DATA":
        data = await getUserInfos(id);
        break;
        default:
            console.log("something went wrong");
    }
    return data;
  }; 

 