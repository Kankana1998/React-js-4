import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | MyYouTube</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <div className='flex items-center justify-center min-h-[60vh] px-4'>
        <div className='text-center max-w-md'>
          <div className='mb-6'>
            <svg className='w-24 h-24 mx-auto text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>
          <h1 className='text-4xl font-bold text-gray-900 mb-2'>404</h1>
          <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Page Not Found</h2>
          <p className='text-gray-600 mb-8'>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to='/'
            className='inline-block px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg'
          >
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

