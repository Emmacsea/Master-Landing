import logo from "../assets/images/logo.svg";
import angleft from "../assets/images/icon-angle-left.svg";
import angright from "../assets/images/icon-angle-right.svg";
import arrow from "../assets/images/icon-arrow.svg";
import PropTypes from 'prop-types'

export const Page3 = ({
    pag1,
    pag2,
}) => {
  return (
    <div className="font-body">
      <div className="grid grid-cols-2">
        <div className="flex justify-start items-center bg-header-image3 bg-cover bg-center px-10 pb-96">
          <div className="mr-14">
            <img src={logo} alt="Brand Logo" />
          </div>

          <nav>
            <ul className="flex -mt-1 text-primary-white text-lg font-bold">
              <li className="mr-11">
                <a href="">home</a>
              </li>
              <li className="mr-11">
                <a href="">shop</a>
              </li>
              <li className="mr-11">
                <a href="">about</a>
              </li>
              <li className="mr-11">
                <a href="">contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <div className="bg-primary-white py-14 pl-20 pr-44">
            <h3 className="text-primary-black text-6xl font-bold">
              Manufactured with the best materials
            </h3>
            <p className="text-primary-darkgray text-base py-7">
              Our modern furniture store provide a high level of quality. Our 
              company has invested in advanced technology to ensure that
              every product is made as perfect and as consitent as 
              possible. With three decades of experience in this industry, we 
              understand what customers want for their home and offices.
            </p>
            <p className="text-primary-black uppercase text-2xl font-semibold flex gap-6 tracking-widest">
              Shop now <img src={arrow} alt="" />
            </p>
          </div>

          <div className="flex bg-primary-black py-6 px-8 gap-10 w-32">
            <button type="click" onClick={pag2}>
              <img src={angleft} alt="" />
            </button>
            <button type="click" onClick={pag1}>
              <img src={angright} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 ">
        <div className="bg-image-dark bg-cover bg-center">
            {/* <img src={imgdark} alt="" /> */}
        </div>

        <div className="bg-primary-white pt-11 pb-11 px-8">
            <h2 className="text-primary-black uppercase text-2xl font-bold">About Our Furniture</h2>
            <p className="pt-3 text-primary-vdarkgray text-sm">
                Our multifunctional collection blends design and function to suit your
                individual taste. Make each room unique, or pick a cohesive theme that best
                express your interests and what insipres you. Find the furniture pieces you
                need, from traditional to comtemporary styles or anything in between.
                Product specialists are available to help you create your dream space.
            </p>
        </div>

        <div className="bg-image-light bg-center bg-cover">
            {/* <img src={imglight} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

Page3.propTypes={
  pag1:PropTypes.func.isRequired,
  pag2:PropTypes.func.isRequired,
}