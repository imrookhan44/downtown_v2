import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <div className="html-embed-2 w-embed"><h2 className="page-footer__title">Jean-Michel <br />Basquiat: <span><svg className="section-footer__title-svg" viewBox="0 0 763 337" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M670.006 302.049v-34.812h27.262v-31.748h-27.262v-30.495h30.461v-31.748h-68.711v160.412h68.85V301.91h-30.6v.139zm-96.53-97.473h3.616c5.564 0 6.955 2.785 6.955 8.773v19.077c0 6.405-1.808 9.886-7.928 9.886h-2.504v-37.736h-.139zm-38.25-31.191v160.412h38.25v-60.433h3.338c5.147 0 6.955 2.785 7.372 10.861l.835 49.572h39.502l-1.947-49.154c-.974-20.191-7.511-28.685-27.262-29.659v-.418c19.194-3.342 27.262-14.621 27.262-35.23v-8.911c0-26.736-14.188-37.04-40.337-37.04h-47.013zM480.145 337c30.462 0 44.649-14.899 44.649-49.85V173.524h-38.25v121.98c0 6.963-1.948 9.469-6.12 9.469-4.312 0-6.399-2.367-6.399-9.051V173.524h-38.389v114.461c.139 35.926 13.631 49.015 44.509 49.015zm-102.511-40.66v-27.571l3.2 1.532c6.398 2.785 8.484 6.544 8.484 13.089v15.039c0 4.734-1.947 6.683-5.285 6.683-4.312.14-6.399-2.227-6.399-8.772zm6.26 40.66c26.566 0 43.953-12.254 43.953-41.774V279.63c0-17.823-9.459-27.988-25.732-35.508l-3.617-1.81 29.071-7.38-1.809-25.482c-2.364-26.736-14.604-39.268-41.588-39.268-25.732 0-43.119 11.836-43.119 39.964v15.039c0 18.241 9.876 31.748 26.567 38.85l1.808.835-28.931 5.988.417 26.317c.696 27.432 15.3 39.825 42.98 39.825zm4.033-100.258c-5.981-2.785-8.345-6.684-8.345-13.507v-15.317c0-4.316 1.53-6.544 5.007-6.544 3.895 0 5.286 2.785 5.564 8.772l.417 27.989-2.643-1.393zm-101.676 37.04l4.173-74.636h.556l4.729 74.636h-9.458zm14.048 60.015h38.946l-20.586-160.412h-54.663l-20.585 160.412h38.806l1.53-28.545h14.466l2.086 28.545zm-91.383-31.748v-34.812h27.262v-31.748h-27.262v-30.495h30.461v-31.748h-68.711v160.412h68.85V301.91h-30.6v.139zm-76.362-.557V173.385h-38.25v160.412h69.407v-32.305h-31.157zM48.96 243.008c0 6.406-1.9473 8.773-6.9546 8.773h-3.7555v-46.787h3.8946c5.1464 0 6.6764 2.228 6.6764 8.355v29.659h.1391zm-2.5037-69.623H.138672v160.412H38.389v-50.268h3.3382c27.9575 0 45.9004-13.507 45.9004-44.141v-24.507c0-28.825-13.3529-41.496-41.1713-41.496zM302.803 127.851h.417l1.252 36.065h35.051V69.5069h-26.845l26.289-11.6967-1.252-14.6209C334.377 12.6942 322.276.440552 295.014.440552c-30.461 0-45.901 14.481648-45.901 50.964248v70.5982c0 30.356 5.981 44.42 26.706 44.42 19.89-.14 25.454-12.532 26.984-38.572zm-8.624-58.3441v31.4701h7.511v12.114c0 15.039-2.921 22.419-8.345 22.419-3.617 0-5.703-1.95-5.703-9.469V42.4931c0-7.1016 2.225-10.3043 6.537-10.3043 4.312 0 6.538 2.3672 7.094 10.4435l1.391 26.8746h-8.485zM203.491 3.50396V90.2547h-.417L183.74 3.50396h-36.164V163.916h35.747V77.5833h.417l19.334 86.3327h36.164V3.50396h-35.747zM98.4767 163.916h38.2503V3.50396H98.4767V163.916zM73.9965 79.9504L92.2176 3.50396H52.1591L38.6672 77.1655h-.4173V3.50396H.138672V163.916H38.389V85.9381h.4173L52.02 163.916h40.754L73.9965 79.9504zM748.315 266.82c-2.364 1.949-6.12 2.924-12.379 2.924-5.703 0-10.015-2.507-11.962-4.038-5.007-3.76-6.677-8.494-7.233-11.836-2.225-12.811 6.259-18.242 10.015-20.052 1.947-.975 4.729-1.253 7.372-1.253 3.477 0 6.815.557 8.206.835 5.007.697 12.936 4.735 14.744 10.305 2.086 6.962-1.669 16.988-8.763 23.115zm7.928-33.141c-6.12-4.456-15.3-6.406-21.42-6.406-6.537 0-15.578 2.785-19.612 8.912-4.034 5.988-4.59 14.9-3.755 19.216.695 3.342 3.06 10.165 7.928 14.343 3.894 3.342 7.094 4.456 9.736 5.152 1.669.418 4.869.835 8.624.835 4.59 0 9.876-.696 13.214-2.785 5.703-3.62 9.041-8.772 11.127-17.266 2.226-9.469 0-17.685-5.842-22.001z" fill="#ECD517" />
            <path d="M740.249 255.262h-.139c-1.53 0-6.398.279-8.485-1.253-.973-.696-1.808-1.671-1.53-3.899.279-2.367.974-4.038 1.948-4.874.834-.696 1.947-.835 3.616-.696 1.808.279 3.338.696 4.312.975.695.278 1.113.278 1.391.278.834 0 1.808-1.114 2.225-2.228.418-1.253 0-2.367-.973-3.202-2.365-1.81-8.207-2.785-11.545-1.532-2.504.975-5.007 5.013-5.703 8.076-.695 3.203-1.391 8.912 2.365 11.836 1.252.975 4.451 2.646 8.345 3.064.835 0 1.53.139 2.226.139 2.364 0 4.034-.418 4.868-.835.835-.418 1.252-1.811 1.252-2.925.139-.696.139-1.81-.556-2.506-.696-.418-1.809-.418-3.617-.418z" fill="#ECD517" /></svg></span></h2></div>
          {/* <img src="https://down-town23.vercel.app/images/logo.png" loading="lazy" alt /> */}
          <div className="social-links"><div className="w-embed"><a className="section-subscribe__link" title="Follow on Instagram" href="https://www.instagram.com/basquiatkingpleasure/" target="_blank" rel="noopener noreferrer">
            {/*?xml version="1.0" standalone="no"?*/}
            <svg version={1.0} xmlns="http://www.w3.org/2000/svg" width={43} height={43} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                <path d="M2321 5110 c-868 -84 -1644 -610 -2037 -1382 -139 -273 -221 -536
-266 -853 -20 -140 -17 -504 6 -660 39 -278 121 -541 247 -794 249 -502 647
-900 1150 -1150 815 -406 1779 -350 2539 147 297 194 579 482 771 788 74 116
184 342 234 478 51 138 110 376 131 531 23 157 26 521 6 660 -59 415 -191 769
-410 1099 -92 140 -185 254 -315 385 -399 403 -895 653 -1462 737 -122 18
-466 26 -594 14z m950 -1293 c279 -84 479 -290 550 -567 21 -81 21 -1299 0
-1380 -73 -285 -286 -498 -571 -571 -81 -21 -1299 -21 -1380 0 -279 72 -488
276 -568 555 -15 55 -17 123 -17 706 0 705 -1 685 60 825 95 213 309 391 525
434 30 6 64 13 75 15 11 2 301 3 645 2 554 -2 631 -4 681 -19z" />
                <path d="M1913 3565 c-86 -24 -154 -64 -224 -134 -72 -72 -111 -138 -134 -228
-23 -86 -22 -1201 0 -1288 24 -91 71 -169 142 -235 71 -67 134 -103 220 -125
86 -23 1201 -22 1288 0 91 24 169 71 235 142 67 71 103 134 125 220 22 85 22
1201 0 1286 -22 86 -58 149 -125 220 -66 71 -144 118 -235 142 -84 21 -1212
21 -1292 0z m1352 -186 c55 -14 111 -72 121 -124 15 -81 -47 -177 -122 -191
-83 -15 -154 20 -186 94 -39 87 4 184 97 217 49 17 38 17 90 4z m-561 -174
c184 -39 361 -177 444 -346 56 -114 75 -206 69 -334 -8 -174 -68 -305 -197
-435 -124 -125 -282 -190 -461 -190 -180 0 -332 64 -464 195 -131 131 -195
283 -195 465 0 182 64 334 195 465 164 164 381 228 609 180z" />
                <path d="M2417 2936 c-115 -48 -174 -104 -225 -213 -24 -52 -27 -70 -27 -163
0 -97 2 -110 32 -172 40 -84 107 -151 193 -192 60 -29 73 -31 170 -31 97 0
110 2 172 32 85 40 151 106 191 191 30 62 32 75 32 172 0 97 -2 110 -32 172
-40 85 -106 151 -191 191 -58 28 -79 32 -162 35 -82 2 -103 -1 -153 -22z" />
              </g>
            </svg>
          </a></div><div className="w-embed"><a className="section-subscribe__link" target="_blank" title="Follow on Facebook" href="https://www.facebook.com/JeanMichelBasquiatKP" rel="noopener noreferrer">
            <svg version={1.0} xmlns="http://www.w3.org/2000/svg" width={43} height={43} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                <path d="M2315 5109 c-800 -83 -1501 -517 -1927 -1196 -494 -786 -516 -1810
-56 -2613 243 -423 598 -770 1017 -994 357 -191 751 -296 1121 -300 l135 -1 3
993 2 992 -275 0 -275 0 0 320 0 320 273 2 272 3 6 335 c5 304 7 342 27 415
77 276 260 460 537 537 72 20 104 22 315 22 129 1 279 -3 333 -8 l97 -8 0
-288 0 -288 -237 -4 c-237 -3 -238 -3 -290 -30 -110 -58 -123 -105 -123 -435
l0 -253 315 0 c173 0 315 -3 315 -7 0 -5 -18 -145 -40 -312 -22 -168 -40 -308
-40 -313 0 -4 -124 -8 -275 -8 l-275 0 0 -945 c0 -520 2 -945 4 -945 19 0 257
90 347 131 301 138 534 304 774 550 209 215 338 400 471 674 118 244 199 516
236 795 16 124 16 509 0 625 -84 591 -328 1089 -733 1494 -397 396 -891 644
-1454 727 -123 18 -478 26 -600 13z" />
              </g>
            </svg>
          </a></div><div className="w-embed"><a className="section-subscribe__link" title="Follow on Twitter" href="https://twitter.com/JMBKingPleasure" target="_blank" rel="noopener noreferrer">
            <svg version={1.0} xmlns="http://www.w3.org/2000/svg" width={43} height={43} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                <path d="M2321 5110 c-868 -84 -1644 -610 -2037 -1382 -139 -273 -221 -536
-266 -853 -20 -140 -17 -504 6 -660 39 -278 121 -541 247 -794 249 -502 647
-900 1150 -1150 815 -406 1779 -350 2539 147 297 194 579 482 771 788 74 116
184 342 234 478 51 138 110 376 131 531 23 157 26 521 6 660 -59 415 -191 769
-410 1099 -92 140 -185 254 -315 385 -399 403 -895 653 -1462 737 -122 18
-466 26 -594 14z m876 -1515 c41 -14 100 -42 130 -63 110 -73 95 -69 168 -50
36 10 107 37 157 62 91 43 118 46 118 11 0 -24 -69 -151 -105 -193 -20 -23
-32 -42 -26 -42 6 0 47 14 93 30 71 26 84 28 96 16 22 -21 -12 -71 -137 -199
l-105 -107 -8 -120 c-26 -397 -181 -744 -453 -1015 -233 -234 -503 -367 -843
-416 -135 -19 -423 -7 -552 24 -132 32 -252 76 -354 130 -88 46 -107 67 -90
95 9 14 32 18 131 24 185 10 366 63 493 143 l45 28 -60 16 c-92 26 -163 69
-240 146 -74 74 -139 185 -133 228 3 20 7 22 63 19 66 -4 66 -4 -19 53 -98 66
-178 181 -211 306 -18 66 -20 166 -3 171 6 2 38 -7 71 -20 32 -13 61 -22 63
-19 2 2 -10 21 -27 43 -115 144 -148 344 -86 523 28 80 54 116 78 105 8 -3 36
-31 63 -62 203 -233 514 -405 827 -458 58 -10 113 -15 122 -11 14 5 17 20 17
89 0 129 33 227 109 328 45 61 134 133 197 161 124 56 287 65 411 24z" />
              </g>
            </svg>
          </a></div><div className="w-embed"><a className="section-subscribe__link" title="Follow on TikTok" href="https://www.tiktok.com/@basquiatkingpleasure" target="_blank" rel="noopener noreferrer">
            <svg version={1.0} xmlns="http://www.w3.org/2000/svg" width={43} height={43} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                <path d="M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -604 -960 -491 -2229
272 -3065 423 -463 951 -740 1585 -830 118 -17 511 -16 635 0 579 80 1097 337
1491 739 130 132 157 163 243 277 256 341 423 757 488 1211 17 118 17 512 0
630 -43 303 -122 561 -247 814 -134 268 -270 459 -483 674 -395 400 -889 649
-1457 733 -123 18 -478 26 -600 13z m790 -1136 c22 -171 76 -302 170 -416 122
-148 304 -243 502 -263 l63 -7 0 -236 0 -236 -94 6 c-52 4 -120 13 -151 19
-136 28 -310 102 -427 181 -31 22 -59 39 -62 39 -2 0 -4 -264 -3 -587 2 -582
2 -589 -21 -678 -83 -326 -333 -580 -657 -666 -120 -31 -294 -36 -415 -11
-361 74 -641 350 -715 703 -20 92 -19 270 1 367 17 85 64 203 116 289 44 73
166 204 242 258 174 123 411 190 606 170 l70 -7 0 -243 0 -243 -37 10 c-21 6
-78 8 -128 6 -114 -5 -200 -43 -278 -123 -249 -253 -108 -673 245 -728 230
-36 454 133 488 368 6 42 10 465 10 1073 l0 1002 234 0 235 0 6 -47z" />
              </g>
            </svg>
          </a></div><div className="w-embed"><a className="section-subscribe__link" title="Follow on YouTube" href="https://www.youtube.com/@BasquiatKingPleasure" target="_blank" rel="noopener noreferrer">
            <svg version={1.0} xmlns="http://www.w3.org/2000/svg" width={43} height={43} viewBox="0 0 450.000000 450.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,450.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                <path d="M2090 4494 c-451 -42 -842 -188 -1190 -447 -124 -93 -358 -327 -448
-448 -232 -315 -368 -645 -429 -1039 -24 -157 -24 -463 0 -620 61 -395 196
-723 431 -1040 90 -122 324 -356 446 -446 314 -233 647 -370 1040 -431 156
-23 462 -23 620 1 392 59 725 197 1040 429 121 90 355 323 448 449 228 305
369 648 428 1038 24 157 24 463 0 620 -59 392 -200 732 -429 1040 -86 115
-283 318 -390 403 -320 253 -685 411 -1087 472 -104 15 -393 27 -480 19z
m1075 -1389 c155 -40 288 -178 324 -336 6 -26 11 -235 11 -519 0 -398 -3 -486
-16 -535 -38 -148 -156 -270 -305 -316 -58 -18 -105 -19 -929 -19 -824 0 -871
1 -929 19 -149 46 -267 168 -305 316 -23 88 -23 982 -1 1070 39 149 167 279
315 319 84 23 1748 23 1835 1z" />
                <path d="M1930 2246 c0 -262 2 -476 4 -476 6 0 749 459 759 469 4 4 -156 108
-355 231 -200 123 -373 230 -385 238 l-23 14 0 -476z" />
              </g>
            </svg>
          </a></div></div></div><div className="footer-info"><h4 className="heading-4 footer-heading">Info</h4><a href="https://www.basquiat.com/" className="footer-link">Jean-Michel Basquiat Estate</a><a href="/#press" className="footer-link">Press</a><a href="/faq" className="footer-link">FAQ</a><a href="/venue-rental" className="footer-link">Venue Rental</a><a href="/privacy-policy" className="footer-link">Privacy Policy</a><a href="/terms-and-conditions" className="footer-link">Terms and Conditions</a><a href="/#home" className="footer-link">Back to Top</a></div><div id="footer" className="footer-contact"><h4 className="heading-4 footer-heading">Contact</h4><a href="mailto:Mediakingpleasure@basquiat.com" className="footer-link">Media Relations</a><a href="mailto:sponsorshipkingpleasure@basquiat.com" className="footer-link">Sponsor and Partner Requests</a><a href="mailto:infokingpleasure@basquiat.com" className="footer-link">General Requests</a><a href="mailto:groupskingpleasure@basquiat.com" className="footer-link">Group Tickets</a><a href="mailto:infokingpleasure@basquiat.com" className="footer-link">Venue&nbsp;Rental</a><a href="mailto:jobskingpleasure@basquiat.com" className="footer-link">Job Opportunities</a></div></footer>


    </>
  )
}

export default Footer