import React from 'react';
import './HowWorks.css';
import how1 from '../../assets/Images/how1.svg';
import how2 from '../../assets/Images/how2.svg';
import how3 from '../../assets/Images/how3.svg';
import how4 from '../../assets/Images/how4.svg';
import worklastimage from '../../assets/Images/workslastimage.svg';

export const HowWorks = () => {

    return(
        <>
        <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className='howworksTopFrame'>
                <label className='howworksBoldTitle'>Layihəyə birgə başlayaq!</label>
                <label  style={{height:'130px'}} className='howworksContentText'>Düşündüyünüzdən daha sadədir... <br/>
Paketi seçdikdən sonraki aşağıda  sadə addımlar <br/> qeyd olunubdur:</label>
            </div>
            <div className='howworksParts' style={{marginTop:19}}>
                <div className='mea k'>
                    <img className='worksImages k-imag' src={how1} />
                </div>
                <div className='meaTextFrameRight'>
                    <label className='howworksHead '>Addım 1</label>
                    <label className='howWorksContentText '>Memarınızı seçin</label>
                    <label>Bizim istedadlı dizayn komandamız xəyal etdiyiniz məkanı
yaratmağınıza kömək etmək üçün buradadır .</label>
                </div>
            </div>
            <div className='howworksParts' style={{margin:19}}>
                <div className='meaTextFrame'>
                    <label className='howworksHead'>Addım 2</label>
                    <label className='howWorksContentText'>Vizyonunuzu paylaşın </label>
                    <label>Memarımızın təqdim etdiyini anketi doldurmaqla bərabər öz fikirlərinizi və istəklərinizi memarımızla bölüşün.Evinizin hazır planı yoxdursa,  ən sadə üsullarla  cızma qara edərək  və ya evin hər bir otağının şəkillərini çəkərək memarımıza yollayın.</label>
                </div>
                <div className='mea r'>
                    <img className='worksImages r-imag ' src={how2} />
                </div>
            </div>
            <div className='howworksParts' style={{marginTop:19}}>
                <div className='mea k'>
                    <img className='worksImages k-imag' src={how3} />
                </div>
                <div className='meaTextFrameRight'>
                    <label className='howworksHead'>Addım 3</label>
                    <label className='howWorksContentText'>Memarınızı seçin 
</label>
<label>Bizim istedadlı dizayn komandamız xəyal etdiyiniz məkanı
yaratmağınıza kömək etmək üçün buradadır .</label>
                </div>
            </div>
            <div className='howworksParts' style={{margin:19}}>
                <div className='meaTextFrame'>
                    <label className='howworksHead'>Addım 4</label>
                    <label className='howWorksContentText'>Sehrli kitabla alış-verişə başlayın </label>
                   <label> Sevimli brendləriniz,  pərakəndə satışçılar və eksklüziv topdan satışçılarla tərəfdaşlıq edirik. Biz etibarlı qiymət təklif edərək, sizə ən uyğun məhsulları təqdim etməkdən məmnunluq hissi duyuruq. Sehrli kitabı əldə edərək layihədə olan bütün məhsulları doğru təyinatla, dəqiq qiymətlər və endirim kuponları ilə əldə etməyinizə zəmanət veririk.</label>
                </div>
                <div className='mea r'>
                    <img className='worksImages r-imag ' src={how4} />
                </div>
            </div>
            <div className='howworksPartsLast' style={{marginTop:33,backgroundColor:'#F5F5F5',height:540}}>
              <div className='lastPartWorks'>
                <img className='howLastImages' src={worklastimage} />
               <button className='howButton'>Paket Seç</button>
               </div>
              
                <div className='meaTextFrameRight'>
                        <label className='howworksHead'>Bütün paketlərə daxildir</label>
                        <label className='meaTextFrameRight'>
                            <li>2D layihələndirmə</li>
                            <li>3D vizual görüntülər</li>
                            <li>Layihədəki əşyaların prayslisti</li>
                            <li>Əşyaların əldə etməsi üçün dəqiq ünvanlar</li>
                            <li>Əşyaların ümumi məbləği</li>
                            <li>Endirim kuponları</li>
                            <li>Moodboard təqdimi</li>
                            <li>Bəzi əşyaların material parçaları</li>
                            <li>Memarla daimi əlaqə</li>
                            <li>Sizə özəl sehrli kitab</li>
                           
                        </label>
                        <label className='meaTextFrameRight'> not: Otağın ölçüsünün bizim üçün önəmi yoxdur. Səni kvm hesablamaqla bezdirmərik. ”Bütün ev” paketinə qeyd edilən qədər otaqlar, mətbəx və sanitar qovşaqlar daxildir.</label>
                    </div>
            </div>
            
        </div>
        </>
    )
}
export default HowWorks;

