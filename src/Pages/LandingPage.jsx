import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <section className="cusine-section py-5">
        <div className="container">
          <h2 className="fs-1 fw-bold text-center pt-5 pb-5 text-primary">
            Cuisines Available
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://imgmedia.lbb.in/media/2019/12/5df3ac3b8b5cec09bebc376f_1576250427495.jpg"
                  className="card-img-top"
                  alt="Tamilian Cuisine"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bolder">Tamilian Cuisine</h5>
                  <p className="card-text lead">
                    A rich and diverse cuisine from Tamil Nadu featuring a variety of flavors and dishes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://blog.untravel.com/wp-content/uploads/2017/11/Karimeen-Pollichathu.jpg"
                  className="card-img-top"
                  alt="Kerala Cuisine"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Kerala Cuisine</h5>
                  <p className="card-text">
                    Traditional dishes from Kerala, known for their use of coconut and spices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://th.bing.com/th/id/OIP.hQzt3PsayY9NAWVZvP3ZXgAAAA?rs=1&pid=ImgDetMain"
                  className="card-img-top"
                  alt="Andhra Cuisine"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Andhra Cuisine</h5>
                  <p className="card-text">
                    Spicy and flavorful dishes from Andhra Pradesh.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://th.bing.com/th/id/OIP.DCcgdtR1va3Ix4dGsVKISAHaE8?rs=1&pid=ImgDetMain"
                  className="card-img-top"
                  alt="Bengali Cuisine"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Bengali Cuisine</h5>
                  <p className="card-text">
                    Delicacies from Bengal, featuring sweets and seafood.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://th.bing.com/th/id/OIP.PQTJqC2w0xhIdROAHfUQ4gHaGS?rs=1&pid=ImgDetMain"
                  className="card-img-top"
                  alt="Rajasthani Cuisine"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Rajasthani Cuisine</h5>
                  <p className="card-text">
                    Rich and spicy dishes from Rajasthan, known for their royal flavors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://bombaychowpatty.ca/wp-content/uploads/2021/11/MAKKI_DI_ROTI_SAAG-350x262.jpg"
                  className="card-img-top"
                  alt="Punjabi Cuisine"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Punjabi Cuisine</h5>
                  <p className="card-text">
                    Hearty and flavorful dishes from Punjab.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://i1.wp.com/news.jugaadin.com/wp-content/uploads/2020/07/litti-chowkha.jpeg?resize=768%2C439&ssl=1"
                  className="card-img-top"
                  alt="Uttar Pradesh Cuisine"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Uttar Pradesh Cuisine</h5>
                  <p className="card-text">
                    Diverse dishes from Uttar Pradesh with rich flavors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://www.mumbailive.com/images/news/Kashmiri-Food-Festival_1516376572434.jpg?w=1368"
                  className="card-img-top"
                  alt="Kashmiri Cuisine"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Kashmiri Cuisine</h5>
                  <p className="card-text">
                    Aromatic and flavorful dishes from Kashmir.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://www.feamag.com/wp-content/uploads/2020/05/HYDERABADI-KACHCHE-gOSHT-KI-bIRIYANI-.jpg"
                  className="card-img-top"
                  alt="Mughalai Cuisine"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Mughalai Cuisine</h5>
                  <p className="card-text">
                    Rich and indulgent dishes inspired by Mughal culinary traditions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://s4.scoopwhoop.com/anj/sw/3ecfbb95-8937-46b3-b4a7-1de9dfb145ef.jpg"
                  className="card-img-top"
                  alt="Gujarati Cuisine"
                />
                <div className="card-body">
                  <h5 className="card-title">Gujarati Cuisine</h5>
                  <p className="card-text">
                    Sweet and savory dishes from Gujarat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <img
                  src="https://i.pinimg.com/originals/50/2b/0b/502b0b17b60a17215b0a85bdf34a1b2f.jpg"
                  className="card-img-top"
                  alt="Goan Cuisine"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Goan Cuisine</h5>
                  <p className="card-text">
                    Coastal dishes from Goa with a mix of spices and seafood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center mt-4">
        <Link to="/explore" className="btn btn-primary">Explore More</Link>
      </div>
    </div>
  );
};

export default LandingPage;
