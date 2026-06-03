import React, { useEffect, useState } from 'react'
import styles from './TermsPopup.module.css';

export default function TermsPopup({ onAgree }) {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className={`${styles.popup} custom-scrollbar text-white  bg-[#0a0e1a]  p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto mt-20`}>
        <h2 className="text-2xl font-bold mb-4">
          Welcome to SERVO Player
        </h2>

        <p className="mb-4">
          SERVO Player is a professional media player designed for legal and authorized content playback only.</p>


        <p className='mb-5'>Our application can be used for:</p>
        <ul className='list-disc'>
          <li className='mb-1 mx-3'>Streaming your personal media libraries (Plex, Jellyfin, etc.)</li>
          <li className='mb-1 mx-3'>Accessing content from licensed and official providers</li>
          <li className='mb-1 mx-3'>Managing private or internal streams for businesses, events, or organizations</li>
          <li className='mb-1 mx-3'>Playing legally available public streams</li>
          <li className='mb-4 mx-3'>Media development and testing purposes</li>

        </ul>

        <p> SERVO Player does not provide, host, sell, or distribute any IPTV subscriptions, playlists, channels, or copyrighted content.

          Users are fully responsible for the content they upload or access through the application and must ensure compliance with all applicable copyright laws and regulations.

          By continuing to use this website and application, you agree to use SERVO Player only for legal purposes and accept our Terms & Conditions.</p>

        <button
          onClick={onAgree}
          className="px-4 py-2 bg-gradient-to-r from-[#0066CC] to-[#1CF1FF] w-full text-white rounded"
        >
          Agree
        </button>
      </div>
    </div>
  );
}
