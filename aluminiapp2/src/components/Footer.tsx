import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
<footer className=" bg-black underline-offset-2 py-6 float-end font-serif text-[#727834]">
      <div className="container px-4 mx-auto" data-aos="fade-up" data-aos-once="true">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full mb-6 sm:w-1/3 sm:mb-0 ">
          <Link to="/" className='flex flex-row items-center gap-2 mb-5 font-serif font-bold w-fit'>
          <img src={require("../assets/logonew.png")} className='w-[50px]' alt="" />
          <div className='text-3xl'>Alumnus</div>
          </Link>
            <h5 className="mb-2 text-lg font-bold">Contact Us</h5>
            <p>Email: info@alumniassociation.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 College St, City, Country</p>
          </div>
          <div className="w-full mb-6 sm:w-1/3 sm:mb-0">
            <h5 className="mb-2 text-lg font-bold">Quick Links</h5>
            <ul className="list-none">
              <li className="mb-2"><Link to="/" className="hover:text-white hover:underline">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="hover:text-white hover:underline">About</Link></li>
              <li className="mb-2"><Link to="/login" className="hover:text-white hover:underline">Login</Link></li>
              <li className="mb-2"><Link to="/search" className="hover:text-white hover:underline">Search</Link></li>
              {/* Conditionally render Admin link if user is logged in */}
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h5 className="mb-2 text-lg font-bold">Follow Us</h5>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="hover:text-white hover:underline">
                <i className="fab fa-facebook"></i> Facebook
              </Link>
              <Link to="https://twitter.com" className="hover:text-white hover:underline">
                <i className="fab fa-twitter"></i> Twitter
              </Link>
              <Link to="https://linkedin.com" className="hover:text-white hover:underline">
                <i className="fab fa-linkedin"></i> LinkedIn
              </Link>
              <Link to="https://instagram.com" className="hover:text-white hover:underline">
                <i className="fab fa-instagram"></i> Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Alumni Association. All Rights Reserved.</p>
          <p>
            <Link to="/privacy" className="hover:text-white hover:underline">Privacy Policy</Link> |
            <Link to="/terms" className="hover:text-white hover:underline"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
