
import {AsyncStorage} from 'react-native';

var _instance;

class LevelDataController {

    static storeLevel(name,data,callback) {
        _instance.storeLevel(name,data,callback);
    }

    constructor() {
        // this.levelNames;
        this.getLevelNames((levelNames)=>{
            console.log('levelNames:',levelNames);
            this.levelNames = levelNames;
        });
    }

    getLevelNames = async (callback) => {
        try {
            const value = await AsyncStorage.getItem('@LevelNames');
            console.log('@LevelNames:',value);
            callback(value);
            // if (value !== null) {
            //     // We have data!!
            //     console.log('@LevelNames:',value);
            // }
        } catch (error) {
            // Error retrieving data
        }
    };

    storeLevel = async (name,data,callback) => {
        try {
            await AsyncStorage.setItem('@LevelDataStore:'+name, data);
            callback();
        } catch (error) {
            // Error saving data
        }
    };

    getLevel = async (levelName) => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

}

export default LevelDataController;