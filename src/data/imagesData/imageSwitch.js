import house from '../../assets/Images/packages/house.png';
import park from '../../assets/Images/packages/park.png';
import bed from '../../assets/Images/packages/bed.png';
import telescope from '../../assets/Images/packages/telescope.png';
import chair from '../../assets/Images/packages/chair.png';
import knife from '../../assets/Images/packages/knife.png';

export  const imageSwitch =(item)=>{
   switch(item.title){
      case "Bütün ev": return house;break;
      case "Landşaft": return park;break;
      case "Test Product": return house;break;
      case "Yataq otağı": return bed;break;
      case "Çalışma otağı": return telescope;break;
      case "Qonaq otağı": return chair;break;
      case "Mətbəx": return knife;break;
   }
}