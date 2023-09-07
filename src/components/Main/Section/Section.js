import React from 'react'
import './section.css'
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Flower from './images/hero-image.png'
import Img1 from './images/admission_1.jpg'
import Img2 from './images/admission_2.jpg'
import Img3 from './images/admission_3.jpg'
import Img4 from './images/img.jpg'
import Img5 from './images/333258-1280x720.webp'
import Img6 from './images/ai.jpg'
import Img7 from './images/piano.webp'
import Img8 from './images/overdose.jpg'
import Img9 from './images/students.jpg'


function Section() {
  return (
    <div className='pt-5 pb-5'>
        <section className='py-5'>
            <div className='container '>
                <div className='row justify-content-center align-items-nter'>
                    <div className='col-lg-6'>
                        {/* <img src={require().default} /> */}
                        <img src={Flower} className='img-fluid'  width={400}/>
                    </div>  
                    <div className='col-lg-6 pt-5'>
                        <h2>2022/23  Academic Session Resumes</h2>
                        <p className=''>
                            lorem ipsum dolor sit amet, consectetur adip incid id 
                            elit non proident et  ullam et ullam  et ullam et ullam et 
                            lorem ipsum dolor sit amet, consectetur adip incid id. 
                            lorem ipsum dolor sit amet, consectetur adip incid id 
                            elit non proident et  ullam et ullam  et ullam et ullam et 
                            lorem ipsum dolor sit amet, consectetur adip incid id. 
                        </p>
                        <div className='session-btn'>
                            <link rel='icon' href=''>
                                
                            </link>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
        {/* programs section */}
        <section className='py-5'>
            <div className='container '>
                <div className='row mb-5'>
                    <div className='col-lg-4 mb-3'>
                        <div className='admission-box color-1   bg-white '>
                            <img src={ Img1 } className='img-fluid' />
                            <div className='admission-content p-3'>
                                <h2 className=''>Undergraduate Programs</h2>     
                                <p>
                                Enjoy the opportunity to conduct transformational research and 
                                discover new possibilities 
                                </p>              
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <div className='admission-box color-2  bg-white'>
                            <img src={ Img2 } className='img-fluid' />
                            <div className='admission-content p-3'>
                                <h2 className=''>Graduate Programs</h2>     
                                <p>
                                Benefit from outstanding teaching, innovation Learning experience and
                                exceptional research
                                </p>              
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <div className='admission-box color-3   bg-white'>
                            <img src={ Img3 } className='img-fluid' />
                            <div className='admission-content p-3'>
                                <h2 className=''>Distance Learning</h2>     
                                <p>
                                Engineering, business, agricultural,science and more, begin your
                                journey with a Programs 
                                </p>              
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-12 col-lg-12'>
                        <div className='explore position-relative text-center'>
                            <img src={Img4} className='img-fluid explore-img'  />
                            <div className='playIcon position-absolute'>
                                <AiFillCaretRight className='play' />                   
                            </div>
                        </div>           
                        <h3 className='explore-h3 pt-3'>A day in LASUSUTECH</h3>
                        <p className='explore-p py-2'>
                            Explore with jimi Adebanjo as he explore the length and
                            breath of the school and engages with some of his pairs
                            about their awersome experience as students
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* campus safety */}

        <section className='campus py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 pb-4'>
                        <h3 className='text-start'>Campus Safety</h3>
                    </div>
                    <div className='col-lg-5'>
                        <img src={Img5} className='img-fluid' />
                    </div>   
                    <div className='col-lg-6 offset-lg-1'>
                        <h3>The toll of a global pandemic</h3>
                        <p>
                            The COVID-19 pandemic has led to a rise in mental health concerns,including
                            anxitey,stress and feelings of isolation,. Guided by our commitment to education
                            and research and to our community's health and safety.
                        </p>
                        <p>
                            The COVID-19 pandemic has led to a rise in mental health concerns,including
                            anxitey,stress and feelings of isolation,. Guided by our commitment to education
                            and research and to our community's health and safety.
                        </p>
                        <Link to="" className='btn btn-primary text-decoration-none'>
                            Read More
                        </Link>
                    </div>   
                </div>
            </div>
        </section>

        {/* research section */}
        <section className='research py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='research-content-head'>
                            <img src={Img6} className='research-img' height={50}/>
                            <div className='research-content p-3'>
                                <h5 className='research-'>AI-The Future</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='research-content-head'>
                           <img src={Img7} className='research-img' height={600}/>
                           <div className='research-content p-3'>
                                <h5 className='research-'>Socail media vices</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='research-content-head'>
                           <img src={Img8} className='research-img' height={600}/>
                            <div className='research-content p-3'>
                                <h5 className='research-'>Drug Overdose</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* events section */}
        <section className='events py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3 className='event-h3'>Events</h3>
                    </div>
                    <div className='col-lg-6 pt-4'>
                        <h3>2022/23 Matriculation</h3>
                        <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo quae officiis quia voluptatem veritatis voluptas itaque in obcaecati nam soluta recusandae quas, perferendis veniam aperiam tempore illum sequi eos!
                        </p>
                        <p>Important Dates:</p>
                        <p>Matriculation begins: April 15th, 2023</p>
                        <p>Matriculation ends: may 15th, 2023</p>
                        <Link to='' className='btn btn-primary'>
                            Book your place
                        </Link>
                    </div>
                    <div className='col-lg-6'>
                        <img src={Img9} className='img-fluid' />           
                    </div>
                </div>
            </div>
        </section>
        {/* news section */}
        <section className='py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between flex-warp'>
                        <h3>Latest News</h3>
                        <Link to='' className='text-decoration-none'>See all</Link>   
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <img src={Img2} className='img-fluid' />
                        <div className='d-flex justify-content-between pt-3'>
                            <h5>Green Enegry</h5>   
                            <div className='news-date'>
                                <p>09/03/2032</p>
                            </div>
                        </div>
                        <p>
                            Est placeat qui temporibus cum quod sequi, nihil tenetur eveniet 
                            esse provident quia, laborum officia quo iste nisi. Amet at provident ex. 
                        </p>
                        <Link to='' className='text-decoration-none btn btn-primary'>
                            Read More
                        </Link>
                    </div>
                    <div className='col-lg-4'>
                       <img src={Img3} className='img-fluid' />
                       <div className='d-flex justify-content-between pt-3'>
                            <h5>Green Enegry</h5>   
                            <div className='news-date'>
                                <p>09/03/2032</p>
                            </div>
                        </div>
                        <p>
                            Est placeat qui temporibus cum quod sequi, nihil tenetur eveniet 
                            esse provident quia, laborum officia quo iste nisi. Amet at provident ex. 
                        </p>
                        <Link to='' className='text-decoration-none btn btn-primary'>
                            Read More
                        </Link>
                    </div>
                    <div className='col-lg-4'>
                       <img src={Img1} className='img-fluid' />
                       <div className='d-flex justify-content-between pt-3'>
                            <h5>A King Reborn</h5>   
                            <div className='news-date'>
                                <p>09/03/2032</p>
                            </div>
                        </div>
                        <p>
                            Est placeat qui temporibus cum quod sequi, nihil tenetur eveniet 
                            esse provident quia, laborum officia quo iste nisi. Amet at provident ex. 
                        </p>
                        <Link to='' className='text-decoration-none btn btn-primary'>
                            Read More
                        </Link>
                    </div>
                </div>       
            </div>
        </section>
    </div>
  )
}

export default Section