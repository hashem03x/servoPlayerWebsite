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
      <div className={styles.pageWrapper} dir={isRtl ? 'rtl' : 'ltr'}>

        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.heroContent}>
            <span className={styles.badge}>{langValue['legal'] || 'Legal'}</span>
            <h1 className={styles.heroTitle}>{langValue['privacyPolicyTitle']}</h1>
            <p className={styles.heroSub}>{langValue['privacyPolicyLastUpdated']}</p>
          </div>
        </div>

        <div className={styles.container}>

          {/* Contact Info */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>{langValue['contactInfoTitle']}</h2>
            </div>

            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>{langValue['companyNameLabel']}</span>
                <span className={styles.contactValue}>SERVO Player</span>
              </div>
              <div className={styles.contactDivider} />
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>{langValue['phoneLabel']}</span>
                <div className={styles.contactLinks}>
                  <a href="tel:+971547174492" className={styles.contactLink}>+971 547 174 492</a>
                  <a href="tel:+201224906650" className={styles.contactLink}>+201 224 906 650</a>
                </div>
              </div>
              <div className={styles.contactDivider} />
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>{langValue['emailLabel']}</span>
                <a href="mailto:servoo.tv@gmail.com" className={styles.contactLink}>servoo.tv@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Refund Policy */}
          <div className={`${styles.card} ${styles.cardGold}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.cardIconGold}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>{langValue['refundPolicyTitle']}</h2>
            </div>

            <p className={styles.policyIntro}>{langValue['refundPolicyText1']}</p>

            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepBody}>
                  <h4 className={styles.stepTitle}>7-Day Window</h4>
                  <p className={styles.stepText}>{langValue['refundPolicyText2']}</p>
                </div>
              </div>
              <div className={styles.stepConnector} />
              <div className={styles.step}>
                <div className={`${styles.stepNumber} ${styles.stepNumberWarn}`}>!</div>
                <div className={styles.stepBody}>
                  <h4 className={styles.stepTitle}>Non-Refundable Cases</h4>
                  <p className={styles.stepText}>{langValue['refundPolicyText3']}</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <a href="mailto:servoo.tv@gmail.com" className={styles.ctaButton}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {langValue['refundContactText']}
              </a>
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
