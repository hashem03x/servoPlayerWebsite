import React from 'react';
import styles from './PrivacyPolicy.module.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import whatsapp from '../../assets/Image/novalogo.png';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { langValue, selectedLanguage } = useLanguage();
  const isRtl = selectedLanguage === 'ar';

  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.container} dir={isRtl ? 'rtl' : 'ltr'}>

          {/* Header */}
          <div className={styles.header}>
            <div className={styles.badge}>{langValue['legal'] || 'Legal'}</div>
            <h1 className={styles.title}>{langValue['privacyPolicyTitle']}</h1>
            <p className={styles.lastUpdated}>{langValue['privacyPolicyLastUpdated']}</p>
            <div className={styles.divider} />
          </div>

          {/* Contact Information Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>{langValue['contactInfoTitle']}</h2>
            </div>

            <div className={styles.contactGrid}>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>{langValue['companyNameLabel']}</span>
                <span className={styles.contactValue}>SERVO Player</span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>{langValue['phoneLabel']}</span>
                <div className={styles.contactValue}>
                  <a href="tel:+971547174492" className={styles.contactLink}>+971 547 174 492</a>
                  <a href="tel:+201224906650" className={styles.contactLink}>+201 224 906 650</a>
                </div>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>{langValue['emailLabel']}</span>
                <a href="mailto:servoo.tv@gmail.com" className={styles.contactLink}>servoo.tv@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Refund Policy Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.cardIconGold}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>{langValue['refundPolicyTitle']}</h2>
            </div>

            <div className={styles.policyContent}>
              <p className={styles.policyText}>{langValue['refundPolicyText1']}</p>

              <div className={styles.highlightBox}>
                <p className={styles.policyText}>{langValue['refundPolicyText2']}</p>
              </div>

              <div className={styles.warningBox}>
                <div className={styles.warningIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </div>
                <p className={styles.warningText}>{langValue['refundPolicyText3']}</p>
              </div>

              <p className={`${styles.policyText} ${styles.contactCta}`}>
                {langValue['refundContactText']}
              </p>
            </div>
          </div>

        </div>
      </div>

      <FloatingWhatsApp
        phoneNumber="+971547174492"
        accountName="SERVO Player"
        avatar={whatsapp}
        statusMessage={langValue['whatsappStatusMessage']}
        chatMessage={langValue['whatsappChatMessage']}
        allowEsc
        allowClickAway
        className="text-black w-[18rem]"
        placeholder={langValue['whatsappPlaceholder']}
      />
    </>
  );
}