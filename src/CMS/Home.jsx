import React from 'react';
import { data } from './Data'; // Assuming './Data' is the file where your data array is exported
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// import './Testimonial.css'
export default function Home() {
  // Splitting data for different sections
  const carouselData = data.slice(0, 4);
  const featuredDestinations = data.slice(4, 8);
  const latestPosts = data.slice(0, 6); // Adjust as needed
  const travelTips = data.slice(0, 4); // Adjust as needed
  const testimonials = data.slice(0, 4); // Adjust as needed

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
   
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, // Show 2 slides at a time on medium devices (tablets)
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on small devices (phones)
        }
      }
    ]
  };



  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselData.map((image, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {carouselData.map((image, index) => (
            <div key={image.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={image.placePhoto} className="d-block w-100" alt={image.title} style={{ objectFit: 'cover', maxHeight: '750px' }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', bottom: 0, left: 0, right: 0 }}>
                <h5>{image.title}</h5>
                <p>{image.content}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <div className="row">
          <h2 className="mb-4 fs-1">About Us</h2>
          <div className="col-12 col-md-8 col-lg-6 mb-4">
            <img src='https://cdn.pixabay.com/photo/2018/03/14/17/18/vietnam-3225777_640.jpg' className="img-fluid" alt="About Us" />
          </div>
          <div className="col-12 col-md-8 col-lg-6 mb-4 ">
            <p>Welcome to our travel blog! We're thrilled to have you here. Our mission is to inspire and guide you through the most breathtaking destinations around the world. Whether you're an avid traveler or planning your first adventure, we're here to help you make the most out of your journeys.</p>
            <p>Our team is passionate about uncovering hidden gems, sharing travel tips, and providing in-depth guides to ensure you have unforgettable experiences. From bustling cities to serene landscapes, we cover a wide range of destinations to suit every traveler's taste.</p>
            <p>We believe in the power of exploration and the joy of discovering new cultures, cuisines, and landscapes. Our blog is designed to provide you with high-quality content that not only informs but also inspires you to embark on your next adventure.</p>
            <p>Thank you for choosing our travel blog as your trusted resource. We look forward to sharing countless travel stories, tips, and guides with you. Happy travels!</p>
          </div>
        </div>

        <div className="row">
          <h2 className="mb-4 fs-1">Featured Destinations</h2>
          {featuredDestinations.map((destination, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
              <img src={destination.placePhoto} className="img-fluid" alt={destination.title} style={{
                transition: 'transform 0.3s ease',
                cursor: "pointer",

              }} />
              <h5>{destination.title}</h5>
              <p>{destination.content}</p>
            </div>
          ))}
        </div>

        <div className="row">
          <h2 className="mb-4 fs-1">Latest Blog Posts</h2>
          {latestPosts.map((post, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <img src={post.placePhoto} className="img-fluid" alt={post.title} style={{
                transition: 'transform 0.3s ease',
                cursor: "pointer",

              }} />
              <h5>{post.title}</h5>
              <p>{post.content}</p>
              {/* Uncomment and adjust the line below when URLs are available */}
              {/* <a href={post.url} className="btn btn-primary">Read More</a> */}
            </div>
          ))}
        </div>



        <div className="row justify-content-center" style={{ overflow: "hidden" }}>
          <h2 className='mb-4 fs-1'>Testimonials</h2>
          <Slider {...settings} style={{}}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="testimonial-item" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)", padding: "20px", maxHeight: "200px" }}>
                  <img src={testimonial.userPhoto} alt={testimonial.author} style={{ width: '100%', borderRadius: '50%', marginBottom: '10px' }} />
                  <h3>{testimonial.title}</h3>
                  <p>{testimonial.content}</p>
                  <p className="author">{testimonial.author}, {testimonial.date}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="row mb-3" >
          <h2 className="mb-4 fs-1">Subscribe to Our Newsletter</h2>
          <div className="col-12">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>


      </div>
    </>
  );
}
