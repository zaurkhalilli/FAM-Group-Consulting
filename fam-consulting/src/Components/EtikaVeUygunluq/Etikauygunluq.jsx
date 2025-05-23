import React, { useEffect } from "react";
import '../EtikaVeUygunluq/Etikauygunluq.scss'
import AOS from "aos";
import "aos/dist/aos.css";
const Etikauygunluq = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6" data-aos="fade-up">
            <div className="about-text">
              <h2>Etika Və Uyğunluq</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem unde magni adipisci dolorum. Temporibus aspernatur sequi voluptatum id doloribus illum eligendi reiciendis ea eius? Voluptatem quas obcaecati reprehenderit vero aperiam, deserunt nesciunt aspernatur accusamus ullam ducimus, sequi ad. Aliquid nesciunt voluptates, blanditiis perspiciatis est earum non nostrum maiores quo asperiores placeat cupiditate corrupti praesentium labore perferendis vel sed ea explicabo laborum quidem? Sapiente odit veritatis asperiores voluptatum. Eos modi impedit quod voluptates obcaecati suscipit minima odio ullam deserunt aliquid, nostrum dolorem sapiente esse consequuntur blanditiis, numquam pariatur quisquam velit eius! Et enim assumenda possimus praesentium nostrum dicta delectus odit!
              </p>
            </div>
          </div>
          <div className="col-xl-6 mb-4 mb-xl-0" data-aos="fade-right">
            <img src="https://cdn.businessday.ng/2022/04/Ethics-in-politics.jpg" className="img-fluid rounded" alt="Haqqımızda" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Etikauygunluq;
