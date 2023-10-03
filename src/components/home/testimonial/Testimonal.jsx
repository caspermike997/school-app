import React from 'react'
import Heading from '../../common/heading/heading'
import { testimonal } from '../../../dummydata'
import './style.css'

const Testimonal = () => {
  return (
    <>
      <section className="testimonial padding">
        <div className="container">
          <Heading subtitle='testimonial' title='Our Successful Students'/>
          <div className="content grid2">
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="Images" />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal