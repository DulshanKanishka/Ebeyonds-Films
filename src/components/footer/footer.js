import React from 'react';
import "./footer.css";

const Footer = () => {

    return (
        <div className={'footer'}>
            <div className={'ebeyonds-container footer-top-container'}>
                <div className={'row footer-top gutter-3rem'}>
                    <div className={'col-12 col-sm-6 footer-address-main'}>
                        <p className={'footer-address footer-address-first-line'}>IT Group</p>
                        <p className={'footer-address'}>C. Salvador de Madariaga, 1</p>
                        <p className={'footer-address'}>28027 Madrid</p>
                        <p className={'footer-address'}>Spain</p>
                    </div>
                    <div className={'col-12 col-sm-6 row follow-us'}>
                        <div className={'follow-us-one'}>Follow us on</div>
                        <div className={'follow-us-two'}>
                        <span className={'follow-us-twitter-container'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25"
                                 fill="none">
                                <path
                                    d="M26.2726 6.60546C26.2909 6.86375 26.2909 7.12203 26.2909 7.38032C26.2909 15.258 20.2943 24.3357 9.33543 24.3357C5.95943 24.3357 2.82228 23.3586 0.18457 21.6603C0.663427 21.7163 1.12514 21.7346 1.62343 21.7346C4.30543 21.7414 6.91151 20.8444 9.02114 19.1883C7.7777 19.1657 6.57237 18.7553 5.57351 18.0144C4.57465 17.2735 3.83215 16.2391 3.44971 15.0557C3.81886 15.1106 4.188 15.1483 4.57543 15.1483C5.11028 15.1483 5.64514 15.074 6.14343 14.9449C4.79392 14.6719 3.58056 13.9401 2.7095 12.8738C1.83844 11.8076 1.36342 10.4726 1.36514 9.09575V9.0226C2.19112 9.48295 3.11398 9.74215 4.05886 9.77917C3.24097 9.23515 2.57035 8.49727 2.10674 7.63127C1.64313 6.76527 1.40093 5.79804 1.40171 4.81575C1.40171 3.70832 1.69657 2.6946 2.21314 1.80889C3.71016 3.65116 5.57764 5.15824 7.69451 6.23243C9.81138 7.30661 12.1304 7.92392 14.5011 8.04432C14.4054 7.59571 14.356 7.13845 14.3537 6.67975C14.3533 5.89704 14.5071 5.12191 14.8064 4.39868C15.1056 3.67545 15.5445 3.0183 16.0979 2.46479C16.6514 1.91128 17.3084 1.47226 18.0316 1.17283C18.7548 0.873408 19.5299 0.719445 20.3126 0.719745C21.1287 0.717687 21.9365 0.883753 22.6857 1.20759C23.4348 1.53144 24.1092 2.00611 24.6669 2.60203C26.0016 2.34505 27.2816 1.8582 28.4497 1.16317C28.0047 2.53999 27.073 3.70735 25.8291 4.4466C27.0128 4.31232 28.1696 4.00144 29.2611 3.52432C28.4452 4.71206 27.4349 5.75371 26.2726 6.60546Z"
                                    fill="white"/>
                            </svg>
                        </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="23" viewBox="0 0 32 23"
                                 fill="none">
                                <path
                                    d="M31.0672 4.03659C30.892 3.3767 30.5466 2.7744 30.0654 2.29002C29.5842 1.80563 28.9842 1.45616 28.3255 1.27659C25.9061 0.624024 16.2078 0.624023 16.2078 0.624023C16.2078 0.624023 6.50836 0.624024 4.09008 1.27659C3.43115 1.45599 2.83092 1.80538 2.34954 2.28978C1.86815 2.77417 1.5225 3.37656 1.34722 4.03659C0.69922 6.47088 0.699219 11.5509 0.699219 11.5509C0.699219 11.5509 0.69922 16.6297 1.34722 19.064C1.70379 20.4069 2.75522 21.4206 4.09008 21.7806C6.50836 22.432 16.2078 22.432 16.2078 22.432C16.2078 22.432 25.9061 22.432 28.3255 21.7806C29.6592 21.4206 30.7106 20.4069 31.0672 19.064C31.7152 16.6297 31.7152 11.5509 31.7152 11.5509C31.7152 11.5509 31.7152 6.47088 31.0672 4.03659ZM13.0352 16.1623V6.93831L21.1415 11.5509L13.0352 16.1623Z"
                                    fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/*<hr className={'footer-middle-seperater'}/>*/}
            <div className={'ebeyonds-container footer-middle-seperater'}>
                <div className={'footer-bottom row gutter-3rem'}>
                    <div className={'col-lg-6 footer-bottom-one'}>
                        Copyright © 2022 IT Hote ls. All rights reserved.
                    </div>
                    <div className={'col-lg-6 footer-bottom-two'}>
                        Photos by Felix Mooneeram & <span className={'footer-bottom-two-f-inner'}>Serge Kutuzov</span>
                        <span
                            className={'footer-bottom-two-s-inner'}>on Unsplash</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;
