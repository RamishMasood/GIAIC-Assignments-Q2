// BY RAMISH MASOOD
import { IoIosArrowForward } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";
import { FiList } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import "./product.css";
import Image from "next/image";
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import Header from "../components/Header";
export default function page() {
  return (
    <>
    <Header/>
    <div className="product-page">
      <div className="category">
        <h4>Shop</h4>

        <span className="cat-list">
          Home <IoIosArrowForward className="cate-gray" /> Shop{" "}
        </span>
      </div>

      <div className="cate-cards">
        <div className="cat-card1">
          <h4>CLOTHS</h4>
          <p>5 Items</p>
        </div>
        <div className="cat-card2">
          <h4>CLOTHS</h4>
          <p>5 Items</p>
        </div>
        <div className="cat-card3">
          <h4>CLOTHS</h4>
          <p>5 Items</p>
        </div>
        <div className="cat-card4">
          <h4>CLOTHS</h4>
          <p>5 Items</p>
        </div>
        <div className="cat-card5">
          <h4>CLOTHS</h4>
          <p>5 Items</p>
        </div>
      </div>

      <div className="filters">
        <div className="ft-first">Showing all 12 results
        </div>

        <div className="ft-middle">
        Views:
        <div className="ft-btn-1"><PiSquaresFourFill />
        </div>
        <div className="ft-btn-2"><FiList />
        </div>
        </div>

        <div className="ft-third">
          <button className="ft-pop-btn">Popularity <IoIosArrowDown />
          </button>
          <button className="ft-blue-btn">Filter</button>
        </div>
      </div>

      <div className="companies">
        <Image src={logo1} alt="logo-1" className="logoimg" ></Image>
        <Image src={logo2} alt="logo-2" className="logoimg" ></Image>
        <Image src={logo3} alt="logo-3" className="logoimg" ></Image>
        <Image src={logo4} alt="logo-4" className="logoimg" ></Image>
        <Image src={logo5} alt="logo-5" className="logoimg" ></Image>
        <Image src={logo6} alt="logo-6" className="logoimg" ></Image>
      </div>



      <div className="pr-cards-cont">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-2"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-3"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-4"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-5"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-6"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-7"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-8"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-9"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-img-10"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-img-11"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-img-12"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>
        </div>


      <div className="pagination">
        <div className="pag-1" >First</div>
        <div className="pag-2" >1</div>
        <div className="pag-3" >2</div>
        <div className="pag-4" >3</div>
        <div className="pag-5" >Next</div>
      </div>


    </div>
    <footer className="bg-gray-50 text-gray-700">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-16 space-y-6 md:space-y-0">
            {/* Column 1 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-semibold text-gray-800">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-semibold text-gray-800">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500">Cookies</a></li>
                <li><a href="#" className="hover:text-blue-500">License</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-semibold text-gray-800">Features</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
                <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
                <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
                <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-semibold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">iOS & Android</a></li>
                <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
                <li><a href="#" className="hover:text-blue-500">Customers</a></li>
                <li><a href="#" className="hover:text-blue-500">API</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-full border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-b-md sm:rounded-l-none sm:rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">
                Lore imp sum dolor Amit.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
    </>
  );
}
