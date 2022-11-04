import React, { useState, useEffect } from 'react';
import './Hakkimizda.css';
import about1 from '../../assets/Images/about1.svg';
import about2 from '../../assets/Images/about2.svg';
import home from '../../assets/Images/home.jpg';
export const Hakkimizda = ({ size }) => {

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className='hakkimizdaTopFrame'>
                    <label className='hakkimizdaBoldTitle'>Ən gözəl ev, sənin evindir!</label>
                    <label className='hakkimizdaContentText'>Biz insanlara yaşadıqları yeri sevməyə kömək etməyi sevirik və dəyərli xalqımıza peşəkar dizayn xidmətləri göstəririk. Oda.az peşəkar dizayn xidmətlərimizlə yanaşı, ticari endirimlər təqdim edərək vaxtına və büdcəsinə qənaət etmək istəyən müştərilərimiz üçün yaradılmışdır. Oda.az ilə xəyallarınızı reallığa çevirərək , öz vaxtınıza və büdcənizə uyğun işləyəcək həllər məhsullar alın və yerləşdirin.</label>
                </div>
                <div className='hakkimizdaParts' style={{   marginTop: 19 }}>
                    <div className='divSplitter l'>
                        <img className='staticImages l-img' src={about2} />
                    </div>
                    <div className='satticTextFrames'>
                        <label className='hakkimizdaThinTitle'>Oda, sizə özəl dizayn edir və sehrli kitabı qapınıza təslim edir.</label>
                        <label className='hakkimizdaContentText'>
                            Bütün xidmətlərə daxildir:<br />
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
                    </div>
                </div>
                <label className='hakkimizdaBoldTitle' style={{ marginTop: 33 }}>Sizə özəl endirimlər qapında!</label>
                <div className='hakkimizdaParts' style={{ marginTop: 19 }}>
                    <div className='satticTextFrames'>
                        <label className='hakkimizdaThinTitle'> Brend firmalardan dizaynınıza özəl endirimlər.</label>
                        <label className='hakkimizdaContentText'>
                       

Sizə özəl dizayn edilən bütün layihələrdə yerləşdirilən əşyalar məhşur firmalar tərəfindən seçilmiş və yerləşdirilmişdir. Sizə təqdim edəcəyimiz kupon vasitəsi ilə məhşur firmalardan əlavə endirimlər əldə etməyə zəmanət verir və partnyorlarımızı genişləndirməyə davam edirik.
                        </label>
                    </div>
                    <div className='divSplitter r'>
                        <img className='staticImages r-img' src={about2} />
                    </div>
                </div>
                <label className='hakkimizdaBoldTitle' style={{ marginTop: 33 }}>Sehrli kitabınla alış-verişə başla!</label>
                <div className='hakkimizdaParts' style={{ marginTop: 19 }}>
                    <div className='divSplitter l'>
                        <img className='staticImages l-img' src={about1} />
                    </div>
                    <div className='satticTextFrames'>
                        <label className='hakkimizdaThinTitle'>Bütün ən yaxşı tövsiyələr sehrli kitab içində birbaşa qapınıza</label>
                        <label className='hakkimizdaContentText w-475'>
                            Bütün məlumatlarınızı topladıqdan sonra hər şeyi qapınıza çatdırmaq bizə təxminən 3 həftə çəkir. Tək konsultasiyadan çox - siz saxlamaq, evinizdə istifadə etmək, mövcud mebelinizə qarşı dayanmaq, alış-verişi özünüzlə aparmaq üçün Dizaynerlərin bütün tövsiyələrini əldə edirsiniz - məhz sizin üçün hazırlanmış möhtəşəm dizayn alətləri dəsti. Öz vaxtınıza və büdcənizə uyğun olaraq oda.az-dan sevimli əşyalarınızı alın və quraşdırın.
                        </label>
                    </div>
                </div>
                <label className='hakkimizdaBoldTitle' style={{ marginTop: 33 }}>Yolunuzu gözləyirik!</label>
                <div className='hakkimizdaParts  ' style={{ marginTop: 33, backgroundColor: '#01577D', height: 540}}>
                    <img className='staticRadiusImages' src={home} />
                    <div className='satticTextFrames'>
                        <label className='hakkimizdaThinTitle' style={{ color: 'white' }}>Xüsusi dizayn və xüsusi endirimlər səni gözləyir!</label>
                        <label className='hakkimizdaContentText w-475' style={{ color: 'white' }}>
                            Sizinlə çalışmaq bizi çox xoşbəxt edər.<br /><br />
                            Hörmətlə<br /><br />
                            oda.az ailəsi!<br />
                        </label>
                        <button className='paketSecButton'>Paket seç</button>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Hakkimizda;