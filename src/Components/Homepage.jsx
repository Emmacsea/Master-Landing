import logo from "../assets/images/logo.svg";
import angleft from "../assets/images/icon-angle-left.svg";
import angright from "../assets/images/icon-angle-right.svg";
import arrow from "../assets/images/icon-arrow.svg";
import PropTypes from 'prop-types';

export const Page1 = ({
    pag2,
    pag3,
}) => {
  return (
    <div className="font-body overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="flex justify-start items-center bg-header-image bg-cover bg-center px-10 pb-96">
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
              Discover innovative ways to decorate
            </h3>
            <p className="text-primary-darkgray text-base py-7">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and
              function in bringing your vision to life. Create a room in your
              own style with our collection and make your property a<br />
              reflection of you and what you love.
            </p>
            <p className="text-primary-black uppercase text-2xl font-semibold flex gap-6 tracking-widest">
              Shop now <img src={arrow} alt="" />
            </p>
          </div>

          <div className="flex bg-primary-black py-6 px-8 gap-10 w-32">
            <button type="click" onClick={pag3}>
              <img src={angleft} alt="" />
            </button>
            <button type="click" onClick={pag2}>
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

Page1.propTypes={
  pag2:PropTypes.func.isRequired,
  pag3:PropTypes.func.isRequired,
}