
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import OurjobsCard from './OurjobsCard';
import cardImg from "../../assets/Images/cardimg.png"
import dancing from '../../assets/Images/dancing.png'
import { useHistory } from 'react-router-dom';
import Questions from '../../views/Package/Question/Questions'
import './ourjobs.css'
const data = [1, 2, 3]

function Ourjobs(props) {
  const history = useHistory()

  return (

    <div style={{ padding: 0 }}>
      <div className='islerFrame'>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <p style={{ fontSize: 24, fontWeight: "700" }}>Bizim işlər <span aria-label='img' role="img" className='ml-10'><img width={31} height={31} src={dancing} alt="dancing" /></span></p>
          <p onClick={() => history.push("/packages")} className='more' style={{ fontSize: 14, fontWeight: "400", color: "#7E7D7A", cursor: "pointer" }}>Daha çox <IoIosArrowForward /></p>
        </div>
        <div className='ourjobs'>
          {data.map(item =>
            <div key={item} >
              <OurjobsCard
                title="Lorem Ipsum is simply dummy "
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                img={cardImg}
              />
            </div>
          )}
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: 30, backgroundColor: "#01577D" }}></div>
      <div className='questionsOutsideFrame'>
        <Questions />
      </div>



    </div>

  );
}

export default Ourjobs;