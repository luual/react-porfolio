import React from "react";
import '../assets/css/playground.css'
import summaryEarning from '../assets/images/playground/summary_earning.svg'
import widgetEarning from '../assets/images/playground/Widget/M-size/Index.svg'
import widgetTable from '../assets/images/playground/Table/Indicator table.svg'
import bubbleChart from '../assets/images/playground/Big widget/Bubble chart.svg'

export default function Playground() {
    return (
        <div className="playground content">
            <div className="playground-nav">
                <div className="playground-nav-logo">
                    <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_617_22674)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 10.5176C12.2558 10.5176 9.01789 13.7556 9.01789 17.7498C9.01789 21.744 12.2558 24.9819 16.25 24.9819C20.2442 24.9819 23.4822 21.744 23.4822 17.7498C23.4822 13.7556 20.2442 10.5176 16.25 10.5176ZM0.982178 17.7498C0.982178 9.31758 7.81783 2.48193 16.25 2.48193C24.6822 2.48193 31.5179 9.31758 31.5179 17.7498C31.5179 26.182 24.6822 33.0176 16.25 33.0176C7.81783 33.0176 0.982178 26.182 0.982178 17.7498Z" fill="url(#paint0_angular_617_22674)"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_617_22674" x="-7.05354" y="-5.55378" width="46.6071" height="46.6071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="4.01786"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0 0 0 0 0 1 0 0 0 0.23 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_617_22674"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_617_22674" result="shape"/>
                        </filter>
                        <radialGradient id="paint0_angular_617_22674" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.25 17.7498) rotate(90) scale(11.25)">
                        <stop stop-color="#03C1FD"/>
                        <stop offset="0.385417" stop-color="#00FFE0"/>
                        <stop offset="0.75" stop-color="#4B0CFF"/>
                        <stop offset="1" stop-color="#180858"/>
                        </radialGradient>
                        </defs>
                    </svg>
                    <div>ORION</div>
                </div>
                <div className="playground-nav-searchbar">
                    <input className="searchbar"></input>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5233 11.4628L15.7355 14.6743L14.6743 15.7355L11.4628 12.5233C10.2678 13.4812 8.7815 14.0022 7.25 14C3.524 14 0.5 10.976 0.5 7.25C0.5 3.524 3.524 0.5 7.25 0.5C10.976 0.5 14 3.524 14 7.25C14.0022 8.7815 13.4812 10.2678 12.5233 11.4628ZM11.0188 10.9063C11.9706 9.92741 12.5022 8.61532 12.5 7.25C12.5 4.349 10.1503 2 7.25 2C4.349 2 2 4.349 2 7.25C2 10.1503 4.349 12.5 7.25 12.5C8.61532 12.5022 9.92741 11.9706 10.9063 11.0188L11.0188 10.9063V10.9063Z" fill="#25245D"/>
</svg>

                </div>
                <ul>
                    <a href="#">Statistics</a>
                    <a href="#">Overview</a>
                    <a href="#">Dashboard</a>
                    <a href="#">Analytics</a>
                </ul>
                <div className="playground-nav-menu-options">
                <svg className="playground-nav-menu-options-profile" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21H14V19C14 18.2044 13.6839 17.4413 13.1213 16.8787C12.5587 16.3161 11.7956 16 11 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21H0V19C0 17.6739 0.526784 16.4021 1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H11C12.3261 14 13.5979 14.5268 14.5355 15.4645C15.4732 16.4021 16 17.6739 16 19V21ZM8 12C7.21207 12 6.43185 11.8448 5.7039 11.5433C4.97595 11.2417 4.31451 10.7998 3.75736 10.2426C3.20021 9.68549 2.75825 9.02405 2.45672 8.2961C2.15519 7.56815 2 6.78793 2 6C2 5.21207 2.15519 4.43185 2.45672 3.7039C2.75825 2.97595 3.20021 2.31451 3.75736 1.75736C4.31451 1.20021 4.97595 0.758251 5.7039 0.456723C6.43185 0.155195 7.21207 -1.17411e-08 8 0C9.5913 2.37122e-08 11.1174 0.632141 12.2426 1.75736C13.3679 2.88258 14 4.4087 14 6C14 7.5913 13.3679 9.11742 12.2426 10.2426C11.1174 11.3679 9.5913 12 8 12ZM8 10C9.06087 10 10.0783 9.57857 10.8284 8.82843C11.5786 8.07828 12 7.06087 12 6C12 4.93913 11.5786 3.92172 10.8284 3.17157C10.0783 2.42143 9.06087 2 8 2C6.93913 2 5.92172 2.42143 5.17157 3.17157C4.42143 3.92172 4 4.93913 4 6C4 7.06087 4.42143 8.07828 5.17157 8.82843C5.92172 9.57857 6.93913 10 8 10Z" fill="#6A6A9F"/>
</svg>
                    <svg viewBox="0 0 20 21" fill="#6A6A9F" xmlns="http://www.w3.org/2000/svg">
<path d="M4.17 16.0025C4.3766 15.4169 4.75974 14.9099 5.2666 14.5512C5.77346 14.1926 6.37909 14 7 14C7.62091 14 8.22654 14.1926 8.7334 14.5512C9.24026 14.9099 9.6234 15.4169 9.83 16.0025H20V18.0025H9.83C9.6234 18.588 9.24026 19.095 8.7334 19.4537C8.22654 19.8123 7.62091 20.0049 7 20.0049C6.37909 20.0049 5.77346 19.8123 5.2666 19.4537C4.75974 19.095 4.3766 18.588 4.17 18.0025H0V16.0025H4.17ZM10.17 9.00245C10.3766 8.41692 10.7597 7.90988 11.2666 7.55124C11.7735 7.1926 12.3791 7 13 7C13.6209 7 14.2265 7.1926 14.7334 7.55124C15.2403 7.90988 15.6234 8.41692 15.83 9.00245H20V11.0025H15.83C15.6234 11.588 15.2403 12.095 14.7334 12.4537C14.2265 12.8123 13.6209 13.0049 13 13.0049C12.3791 13.0049 11.7735 12.8123 11.2666 12.4537C10.7597 12.095 10.3766 11.588 10.17 11.0025H0V9.00245H10.17ZM4.17 2.00245C4.3766 1.41692 4.75974 0.909884 5.2666 0.55124C5.77346 0.192596 6.37909 0 7 0C7.62091 0 8.22654 0.192596 8.7334 0.55124C9.24026 0.909884 9.6234 1.41692 9.83 2.00245H20V4.00245H9.83C9.6234 4.58798 9.24026 5.09502 8.7334 5.45366C8.22654 5.81231 7.62091 6.0049 7 6.0049C6.37909 6.0049 5.77346 5.81231 5.2666 5.45366C4.75974 5.09502 4.3766 4.58798 4.17 4.00245H0V2.00245H4.17ZM7 4.00245C7.26522 4.00245 7.51957 3.89709 7.70711 3.70956C7.89464 3.52202 8 3.26767 8 3.00245C8 2.73723 7.89464 2.48288 7.70711 2.29534C7.51957 2.10781 7.26522 2.00245 7 2.00245C6.73478 2.00245 6.48043 2.10781 6.29289 2.29534C6.10536 2.48288 6 2.73723 6 3.00245C6 3.26767 6.10536 3.52202 6.29289 3.70956C6.48043 3.89709 6.73478 4.00245 7 4.00245V4.00245ZM13 11.0025C13.2652 11.0025 13.5196 10.8971 13.7071 10.7096C13.8946 10.522 14 10.2677 14 10.0025C14 9.73723 13.8946 9.48288 13.7071 9.29534C13.5196 9.10781 13.2652 9.00245 13 9.00245C12.7348 9.00245 12.4804 9.10781 12.2929 9.29534C12.1054 9.48288 12 9.73723 12 10.0025C12 10.2677 12.1054 10.522 12.2929 10.7096C12.4804 10.8971 12.7348 11.0025 13 11.0025V11.0025ZM7 18.0025C7.26522 18.0025 7.51957 17.8971 7.70711 17.7096C7.89464 17.522 8 17.2677 8 17.0025C8 16.7372 7.89464 16.4829 7.70711 16.2953C7.51957 16.1078 7.26522 16.0025 7 16.0025C6.73478 16.0025 6.48043 16.1078 6.29289 16.2953C6.10536 16.4829 6 16.7372 6 17.0025C6 17.2677 6.10536 17.522 6.29289 17.7096C6.48043 17.8971 6.73478 18.0025 7 18.0025V18.0025Z"/>
</svg>

                </div>
            </div>
            <div className="playground-content">
                <div className="playground-content-widget">
                    <div className="playground-content-widget-title">Statistics</div>
                    <div className="playground-content-widget-charts">
                        <img src={summaryEarning}></img>
                        <img src={widgetEarning} />
                        <img src={widgetTable} />
                    </div>                 
                </div>
                <div className="playground-content-main">
                    <img className="playground-content-main-bubblechart" src={bubbleChart} />
                </div>
                <div className="playground-content-main-nav">
                    <ul>
                        <div>+</div>
                        <div>-</div>
                        <div>o</div>
                    </ul>

                </div>
            </div>
            <div className="playground-footer">
            </div>
        </div>
    );
}