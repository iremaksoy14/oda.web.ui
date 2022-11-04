import { Dimensions } from 'react-native';
export let screenWidth = Dimensions.get('window').width;
export let screenHeight = Dimensions.get('window').height;
// const baseHeight = 812;
// const baseWidht = 375;
export const SizeAdapter=(baseWidht=0,baseHeight=0,itemWidht=0,itemHeight=0)=>{
    if(screenWidth>screenHeight){
        const height = screenHeight;
        screenHeight = screenWidth;
        screenWidth = height;
    }
    const heightRatio = (itemHeight*100)/baseHeight;
    const widthRatio = (itemWidht*100)/baseWidht;
    return{
        width:(screenWidth*widthRatio)/100,
        height:(screenHeight*heightRatio)/100,
    }
}
export const WeatherComponentSize = () => {
    const size = {
        width: (screenWidth * 23.5) / 100,
        height: (screenHeight * 25.36) / 100,
    }
    return size;
}
export const PooldayFrameSize = () => {
    const size = {
        height: (screenHeight * 37.68) / 100,
    }
    return size;
}
export const PooldayHeaderFrameSize = () =>{
    return {
        height: (screenHeight * 12.31)/100,
    }
}


