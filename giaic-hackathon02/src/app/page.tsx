// BY RAMISH MASOOD

import { IoIosArrowForward } from "react-icons/io";
import { TfiAlarmClock } from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";
import Image from "next/image";
import Personimg from "./images/shop-hero.png";
import SecPersonimg from "./images/asian-woman-man.png";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="homepage">
      <Header/>
      <div className="home-hero">
        <div className="hometext">
          <span>SUMMER 2020</span>
          <h1>NEW COLLECTION</h1>
          <p>
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="second-section">
        <span>EDITORS PICK</span>
        <p>Problems trying to resolve the conflict between </p>

        <div className="product-grid">
          <div className="pro-col-1">
            <button>MEN</button>
          </div>
          <div className="pro-col-2">
            <button>WOMEN</button>
          </div>

          <div className="pro-col-3">
            <div className="pro-row-1">
              <button>ACCESSORIES</button>
            </div>
            <div className="pro-row-2">
              <button>KIDS</button>
            </div>
          </div>
        </div>
      </div>

      <div className="third-section">
        <span>Featured Products</span>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between</p>

        <div className="cards-cont">
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
        </div>
      </div>

      <div className="fourth-section">
        <div className="fourth-text">
          <span>SUMMER 2020</span>
          <h1>Vita Classic Product</h1>
          <p>
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="fourth-btns">
            <button className="four-price-btn">$16.48</button>
            <button className="four-cart-btn">
              ADD TO CART <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="fourth-image">
          <Image
            className="personimg"
            src={Personimg}
            alt="person-image"
          ></Image>
        </div>
      </div>

      <div className="fifth-section">
        <div className="fifth-image">
          <Image
            className="secperson"
            src={SecPersonimg}
            alt="person-image"
          ></Image>
        </div>

        <div className="fifth-text">
          <span>SUMMER 2020</span>
          <h1>Part of the Neural Universe</h1>
          <p>
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="fifth-btns">
            <button className="fifth-price-btn">BUY NOW</button>
            <button className="fifth-cart-btn">READ MORE </button>
          </div>
        </div>
      </div>

      <div className="sixth-section">
        <span>Practice Advice</span>
        <h3>Featured Posts</h3>
        <p className="six-para">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        <div className="features-cards-container">
          <div className="card-1">
            <div className="card-image"></div>
            <div className="card-text">
              <ul>
                <li><span className="feature-blue">Google</span></li>
                <li>Trending</li>
                <li>New</li>
              </ul>

              <h3>Loudest à la Madison #1 (Lintegral)</h3>

              <p>
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </p>

              <div className="details">
                <div className="date">
                <TfiAlarmClock className="
                fea-date" />
                22 April 2021
                </div>
                <div className="comments">
                <VscGraphLine className="
                fea-comment" />
                10 comments
                </div>
              </div>

              <div className="feature-btn">
              Learn More <IoIosArrowForward className="feat-btn" />
              </div>
            </div>
          </div>

          <div className="card-1">
            <div className="card-image-2"></div>
            <div className="card-text">
              <ul>
                <li><span className="feature-blue">Google</span></li>
                <li>Trending</li>
                <li>New</li>
              </ul>

              <h3>Loudest à la Madison #1 (Lintegral)</h3>

              <p>
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </p>

              <div className="details">
                <div className="date">
                <TfiAlarmClock className="
                fea-date" />
                22 April 2021
                </div>
                <div className="comments">
                <VscGraphLine className="
                fea-comment" />
                10 comments
                </div>
              </div>

              <div className="feature-btn">
              Learn More <IoIosArrowForward className="feat-btn" />
              </div>
            </div>
          </div>


          <div className="card-1">
            <div className="card-image-3"></div>
            <div className="card-text">
              <ul>
                <li><span className="feature-blue">Google</span></li>
                <li>Trending</li>
                <li>New</li>
              </ul>

              <h3>Loudest à la Madison #1 (Lintegral)</h3>

              <p>
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </p>

              <div className="details">
                <div className="date">
                <TfiAlarmClock className="
                fea-date" />
                22 April 2021
                </div>
                <div className="comments">
                <VscGraphLine className="
                fea-comment" />
                10 comments
                </div>
              </div>

              <div className="feature-btn">
              Learn More <IoIosArrowForward className="feat-btn" />
              </div>
            </div>
          </div>
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
    </div>
  );
}
