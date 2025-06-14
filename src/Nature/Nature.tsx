import React from "react";
import { dataApi } from "../Data/Data";
const Nature = () => {
  return (
    <div>
      {dataApi.map((item: any) => (
        <>
          <div className="images-section">
            <div className="images-display">
              <div className="our-services">
                <p>Our Service Blogs</p>
                <div className="div-divider"></div>
              </div>

              <div>
                <img src={item.image} />
                <p className="heading-title">Web Design</p>
                <p className="heading-description">{item.desc}</p>
              </div>
              <div>
                <img src={item.img} alt="" />
                <p className="heading-title">{item.title}</p>
                <p className="heading-description">{item.desc}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Nature;
