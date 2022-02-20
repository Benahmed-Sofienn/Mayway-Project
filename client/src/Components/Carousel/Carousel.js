import React from 'react'
// import { useSelector } from 'react-redux';
import Carousel from "react-elastic-carousel";
import { Rate } from 'antd';

import './Carousel.css'

const Carrousel = () => {

// const user = useSelector(state => state.userReducer.user)

  const breakPoints = [
    
    { width: 768, itemsToShow: 1 },
    { width: 1100, itemsToShow: 2 },
  ];

    return (
      <div className="gtco-testimonials">
         <Carousel breakPoints={breakPoints} autoPlaySpeed={5000} enableAutoPlay={true} showArrows={false}  >
         <div>
          <div className="card text-center"><img className="card-img-top" src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg" alt="profileImg" />
            <div className="card-body">
              <h5>Khouloud <br />
              <Rate disabled allowHalf defaultValue={4.5} />
              </h5>
              <p className="card-text">“ Thank you for this application, it made my life easier and saved me a lot of time ” </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center"><img className="card-img-top" src="https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=20&m=1072093690&s=612x612&w=0&h=Ns3WeEm1VrIHhZOmhiGY_fYKvIlbJrVADLqfxyPQVPM=" alt="profileImg" />
            <div className="card-body">
              <h5>Seif<br />
              <Rate disabled allowHalf defaultValue={5} />
              </h5>
              <p className="card-text">“ Finally!! I no longer have to wait in the station without knowing when the bus will come ” </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center"><img className="card-img-top" src="https://i0.wp.com/www.hisour.com/wp-content/uploads/2020/01/Geometric-abstraction.jpg?fit=960%2C640&ssl=1" alt="profileImg" />
            <div className="card-body">
              <h5>Salah<br />
              <Rate disabled allowHalf defaultValue={4.5} />
              </h5>
              <p className="card-text">“ 
I loved the application, try to add the interregional lines as soon as possible if you please! ” </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center"><img className="card-img-top" src="https://img.phonandroid.com/2021/06/Windows-11-fond-decran.jpg" alt="profileImg" />
            <div className="card-body">
              <h5>Ali<br />
              <Rate disabled allowHalf defaultValue={4} />
              </h5>
              <p className="card-text">“ Thank you for this application, it made my life easier and saved me a lot of time ” </p>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="card text-center"><img className="card-img-top" src={user.imgLink} alt="profileImg" />
            <div className="card-body">
              <h5>{user.name}<br />
              <Rate  allowHalf />
              </h5>
              <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat ” </p>
            </div>
          </div>
        </div> */}

        </Carousel>
        </div>
    )
}

export default Carrousel
