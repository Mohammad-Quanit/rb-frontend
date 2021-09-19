import React from 'react';
import { useFormik } from 'formik';
import BeatLoader from 'react-spinners/BeatLoader'
import Loading from 'react-fullscreen-loading';

import './styles.css';
import axiosInstance from '../../config/axios';

const Signup = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      FullName: '',
      EmailId: '',
      CompanyName: '',
      CNIC: '',
      MobileNo: '',
      Address: '',
      Password: '',
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      const payload = { cnic: values.CNIC, phoneNo: values.MobileNo };
      try {
        const response = await axiosInstance.post('/otp/generateotp', payload);
        localStorage.setItem('account', JSON.stringify(values));
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className='main-wrapper signup-wrapper'>
      <div className='content-wrapper signup-wrapper shadow-sm'>
        <div className='profile-pic-wrapper'>
          <div className='upload-icon'>
            <svg
              version='1.1'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 420.8 420.8'
            >
              <g>
                <g>
                  <g>
                    <path
                      d='M406.8,96.4c-8.4-8.8-20-14-33.2-14h-66.4v-0.8c0-10-4-19.6-10.8-26c-6.8-6.8-16-10.8-26-10.8h-120
				c-10.4,0-19.6,4-26.4,10.8c-6.8,6.8-10.8,16-10.8,26v0.8h-66c-13.2,0-24.8,5.2-33.2,14c-8.4,8.4-14,20.4-14,33.2v199.2
				C0,342,5.2,353.6,14,362c8.4,8.4,20.4,14,33.2,14h326.4c13.2,0,24.8-5.2,33.2-14c8.4-8.4,14-20.4,14-33.2V129.6
				C420.8,116.4,415.6,104.8,406.8,96.4z M400,328.8h-0.4c0,7.2-2.8,13.6-7.6,18.4s-11.2,7.6-18.4,7.6H47.2
				c-7.2,0-13.6-2.8-18.4-7.6c-4.8-4.8-7.6-11.2-7.6-18.4V129.6c0-7.2,2.8-13.6,7.6-18.4s11.2-7.6,18.4-7.6h77.2
				c6,0,10.8-4.8,10.8-10.8V81.2c0-4.4,1.6-8.4,4.4-11.2s6.8-4.4,11.2-4.4h119.6c4.4,0,8.4,1.6,11.2,4.4c2.8,2.8,4.4,6.8,4.4,11.2
				v11.6c0,6,4.8,10.8,10.8,10.8H374c7.2,0,13.6,2.8,18.4,7.6s7.6,11.2,7.6,18.4V328.8z'
                    />
                    <path
                      d='M210.4,130.8c-27.2,0-52,11.2-69.6,28.8c-18,18-28.8,42.4-28.8,69.6s11.2,52,28.8,69.6c18,18,42.4,28.8,69.6,28.8
				s52-11.2,69.6-28.8c18-18,28.8-42.4,28.8-69.6s-11.2-52-28.8-69.6C262.4,142,237.6,130.8,210.4,130.8z M264.8,284
				c-14,13.6-33.2,22.4-54.4,22.4S170,297.6,156,284c-14-14-22.4-33.2-22.4-54.4c0-21.2,8.8-40.4,22.4-54.4
				c14-14,33.2-22.4,54.4-22.4s40.4,8.8,54.4,22.4c14,14,22.4,33.2,22.4,54.4C287.6,250.8,278.8,270,264.8,284z'
                    />
                    <circle cx='352.8' cy='150' r='19.6' />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            className='input-field'
            name='FullName'
            type='text'
            placeholder='Full name'
            onChange={formik.handleChange}
            value={formik.values.FullName}
          />
          <input
            className='input-field'
            name='EmailId'
            type='email'
            placeholder='Email address'
            onChange={formik.handleChange}
            value={formik.values.EmailId}
          />
          <input
            className='input-field'
            name='CompanyName'
            type='text'
            placeholder='Company Name'
            onChange={formik.handleChange}
            value={formik.values.CompanyName}
          />
          <input
            className='input-field'
            name='CNIC'
            type='text'
            placeholder='CNIC/Passport'
            onChange={formik.handleChange}
            value={formik.values.CNIC}
          />
          <input
            className='input-field'
            name='MobileNo'
            type='tel'
            placeholder='Phone number'
            onChange={formik.handleChange}
            value={formik.values.MobileNo}
          />
          <input
            className='input-field'
            name='Address'
            type='text'
            placeholder='Address'
            onChange={formik.handleChange}
            value={formik.values.Address}
          />
          <input
            className='input-field'
            name='Password'
            type='password'
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.Password}
          />
          {isLoading ? (
            <>
              <Loading loading background='transparent' loaderColor='#7741d3' />
              <button disabled><BeatLoader color="#fff" size={5} /></button>
            </>
          ) : (
            <button type='submit'>Submit</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
