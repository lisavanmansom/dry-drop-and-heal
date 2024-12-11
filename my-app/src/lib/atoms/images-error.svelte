<script>
    let {name, style = '', pageStyle = {}, ...others} = $props();
    </script>
    
    <!--animals with human head-->
    {#if name == 'an1'}
    <img src="/images/an-1.png" class={pageStyle} alt="" width="100" height="100" />
    
    {:else if name == 'an2'}
    <img src="/images/an-2.png" class={pageStyle} alt="" width="100" height="100" /> <!--no alt text needed-->
    
    {:else if name == 'an3'}
    <img src="/images/an-3.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'an4'}
    <img src="/images/an-4.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'an5'}
    <img src="/images/an-5.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->

    {:else if name == 'an6'}
    <img src="/images/an-6.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
   
    {:else if name == 'an8'}
    <img src="/images/an-8.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    <!--background elements / trees etc-->
    {:else if name == 'hillBG'}
    <img src="/images/2-bg.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'forestBG'}
    <img src="/images/forest-trees.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'treesBG'}
    <img src="/images/green-trees.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
   
    <!--image elements-->
    {:else if name == 'cross'}
    <img src="/images/IMG-3272.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'heads'}
    <img src="/images/heads.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'scaryLady'}
    <img src="/images/IMG-3273.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'bird'}
    <img src="/images/IMG-3275.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'treewomen'}
    <img src="/images/IMG-3277.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'scareObject'}
    <img src="/images/IMG-3279.png" class={pageStyle} alt="" width="100" height="100" style={style} loading="lazy" /> <!--no alt text needed-->
    
    {:else if name == 'circle'}
    <svg width="120" height="120" class={pageStyle} style={style} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="60.5" cy="60.5" r="33.5" 
        fill="#F3DE8B" stroke="#FFDA46" stroke-width="8"/><circle cx="60" cy="60" r="57.5" 
        stroke="#FFD52E" stroke-width="5"/></svg>
    
        
    {:else if name == 'text'}    
    <svg width="2386" height="1177" class={pageStyle} style={style} preserveAspectRatio="none" viewBox="0 0 2386 1177" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2385.41 1167.41H2215.13L2207.91 1152.98C2222.35 1152.02 2232.45 1149.61 2238.22 1145.77C2244.95 1140.96 2248.32 1133.26 2248.32 1122.68C2248.32 1118.83 2247.36 1111.13 2245.43 1099.59L2086.7 438.682H2044.85V1080.83C2045.81 1109.69 2049.66 1128.93 2056.4 1138.55C2063.13 1147.21 2076.6 1152.02 2096.8 1152.98L2093.92 1167.41H1923.64L1920.75 1152.98C1940.95 1152.02 1954.42 1147.21 1961.16 1138.55C1967.89 1128.93 1971.74 1109.69 1972.7 1080.83V99.5701C1971.74 70.7094 1967.89 51.95 1961.16 43.2918C1954.42 33.6717 1940.95 28.3806 1920.75 27.4186L1923.64 12.9883H2181.94C2218.5 12.9883 2250.24 23.0895 2277.18 43.2918C2304.12 63.4943 2324.32 90.4309 2337.79 124.102C2352.22 156.81 2359.43 191.443 2359.43 228C2359.43 286.683 2342.6 337.189 2308.93 379.518C2275.26 420.885 2227.16 440.606 2164.62 438.682H2160.29L2313.26 1080.83C2320.95 1108.73 2329.13 1127.49 2337.79 1137.11C2347.41 1146.73 2362.8 1152.02 2383.96 1152.98L2385.41 1167.41ZM2044.85 424.252H2142.98C2186.27 424.252 2219.46 405.011 2242.55 366.531C2266.6 328.05 2278.62 281.873 2278.62 228C2278.62 175.089 2267.56 128.912 2245.43 89.4688C2224.27 49.064 2194.93 28.3806 2157.41 27.4186H2096.8C2076.6 28.3806 2063.13 33.6717 2056.4 43.2918C2049.66 51.95 2045.81 70.7094 2044.85 99.5701V424.252Z" 
        fill="#F3DE8B"/><path d="M1697.03 0C1766.29 0 1815.84 21.6455 1845.66 64.9363C1876.44 108.227 1891.83 175.088 1891.83 265.518V910.552C1891.83 1000.98 1876.44 1067.84 1845.66 1111.13C1815.84 1154.42 1766.29 1176.07 1697.03 1176.07C1630.65 1176.07 1582.06 1155.87 1551.28 1115.46C1520.5 1074.1 1504.14 1010.6 1502.22 924.982V265.518C1502.22 175.088 1517.61 108.227 1548.39 64.9363C1579.18 21.6455 1628.72 0 1697.03 0ZM1819.68 265.518C1819.68 204.91 1816.32 157.29 1809.58 122.658C1803.81 87.0628 1792.27 60.1262 1774.95 41.8478C1757.63 23.5694 1731.66 14.4303 1697.03 14.4303C1662.39 14.4303 1635.94 23.5694 1617.66 41.8478C1600.34 59.1642 1588.32 85.6198 1581.58 121.215C1575.81 156.809 1573.41 204.91 1574.37 265.518V924.982C1573.41 1009.64 1581.1 1070.25 1597.46 1106.8C1614.77 1143.36 1647.96 1161.64 1697.03 1161.64C1731.66 1161.64 1757.63 1152.5 1774.95 1134.22C1792.27 1115.94 1803.81 1089.49 1809.58 1054.85C1816.32 1019.26 1819.68 971.159 1819.68 910.552V265.518Z" 
        fill="#F3DE8B"/><path d="M1458.15 1167.41H1287.87L1280.66 1152.98C1295.09 1152.02 1305.19 1149.61 1310.96 1145.77C1317.69 1140.96 1321.06 1133.26 1321.06 1122.68C1321.06 1118.83 1320.1 1111.13 1318.17 1099.59L1159.44 438.682H1117.59V1080.83C1118.55 1109.69 1122.4 1128.93 1129.14 1138.55C1135.87 1147.21 1149.34 1152.02 1169.54 1152.98L1166.66 1167.41H996.378L993.492 1152.98C1013.69 1152.02 1027.16 1147.21 1033.9 1138.55C1040.63 1128.93 1044.48 1109.69 1045.44 1080.83V99.5701C1044.48 70.7094 1040.63 51.95 1033.9 43.2918C1027.16 33.6717 1013.69 28.3806 993.492 27.4186L996.378 12.9883H1254.68C1291.24 12.9883 1322.98 23.0895 1349.92 43.2918C1376.86 63.4943 1397.06 90.4309 1410.53 124.102C1424.96 156.81 1432.17 191.443 1432.17 228C1432.17 286.683 1415.34 337.189 1381.67 379.518C1348 420.885 1299.9 440.606 1237.36 438.682H1233.04L1386 1080.83C1393.69 1108.73 1401.87 1127.49 1410.53 1137.11C1420.15 1146.73 1435.54 1152.02 1456.7 1152.98L1458.15 1167.41ZM1117.59 424.252H1215.72C1259.01 424.252 1292.2 405.011 1315.29 366.531C1339.34 328.05 1351.36 281.873 1351.36 228C1351.36 175.089 1340.3 128.912 1318.17 89.4688C1297.01 49.064 1267.67 28.3806 1230.15 27.4186H1169.54C1149.34 28.3806 1135.87 33.6717 1129.14 43.2918C1122.4 51.95 1118.55 70.7094 1117.59 99.5701V424.252Z" 
        fill="#F3DE8B"/><path d="M949.424 1167.41H779.146L771.931 1152.98C786.361 1152.02 796.463 1149.61 802.235 1145.77C808.969 1140.96 812.336 1133.26 812.336 1122.68C812.336 1118.83 811.374 1111.13 809.45 1099.59L650.717 438.682H608.869V1080.83C609.831 1109.69 613.679 1128.93 620.413 1138.55C627.147 1147.21 640.615 1152.02 660.818 1152.98L657.932 1167.41H487.654L484.768 1152.98C504.97 1152.02 518.439 1147.21 525.173 1138.55C531.907 1128.93 535.755 1109.69 536.717 1080.83V99.5701C535.755 70.7094 531.907 51.95 525.173 43.2918C518.439 33.6717 504.97 28.3806 484.768 27.4186L487.654 12.9883H745.956C782.513 12.9883 814.26 23.0895 841.196 43.2918C868.133 63.4943 888.335 90.4309 901.804 124.102C916.234 156.81 923.449 191.443 923.449 228C923.449 286.683 906.614 337.189 872.943 379.518C839.272 420.885 791.171 440.606 728.64 438.682H724.311L877.272 1080.83C884.968 1108.73 893.146 1127.49 901.804 1137.11C911.424 1146.73 926.816 1152.02 947.981 1152.98L949.424 1167.41ZM608.869 424.252H706.995C750.286 424.252 783.475 405.011 806.564 366.531C830.614 328.05 842.64 281.873 842.64 228C842.64 175.089 831.576 128.912 809.45 89.4688C788.285 49.064 758.944 28.3806 721.425 27.4186H660.818C640.615 28.3806 627.147 33.6717 620.413 43.2918C613.679 51.95 609.831 70.7094 608.869 99.5701V424.252Z" 
        fill="#F3DE8B"/><path d="M316.024 675.339L441.567 1167.41H2.88606L0 1152.98C20.2024 1152.02 33.6707 1147.21 40.4048 1138.55C47.139 1128.93 50.9871 1109.69 51.9491 1080.83V99.5701C50.9871 70.7094 47.139 51.95 40.4048 43.2918C33.6707 33.6717 20.2024 28.3806 0 27.4186L2.88606 12.9883H370.859L389.618 291.493H375.188C366.53 203.949 357.39 143.823 347.77 111.114C339.112 77.4435 323.72 55.3171 301.593 44.7348C279.467 33.1906 241.467 27.4186 187.594 27.4186H124.101V393.948C158.733 393.948 181.341 392.024 191.923 388.176C203.467 384.328 209.239 373.746 209.239 356.429C209.239 344.885 204.429 317.467 194.809 274.177H209.239L316.024 675.339ZM284.277 1152.98C324.682 1152.98 352.099 1149.13 366.53 1141.44C381.922 1133.74 389.618 1115.46 389.618 1086.6C389.618 1064.48 385.289 1033.21 376.631 992.806C368.935 952.401 354.504 889.869 333.34 805.212L301.593 675.339L272.733 572.884C258.302 518.049 246.758 480.53 238.1 460.328C230.404 440.125 219.822 426.657 206.353 419.923C192.885 412.226 171.24 408.378 141.417 408.378H124.101V1152.98H284.277Z" 
        fill="#F3DE8B"/></svg>        
    {/if}
    
    <style>
       /* section 1 */
        .scaryLady {
            bottom: 0;
            height: 85%;
            object-fit: cover;
            position: absolute;
            width: 50%;
            z-index: 1;
        }

        .error-trees, .error-trees-invert {
            bottom: 0;
            height: 100%;
            position: absolute;
            width: 50%;
        }
        .error-trees {
            left: 0;
        }
        .error-trees-invert {
            transform: scaleX(-1);
            right: 0;
        }

        .circle {
            width: 2em;
        }

        .text {
            width: 90vw;
            height: 40vh;
        }

        /* section 2 */
        .an1, .an2, .an3, .an4, .an5, .an6, .an8 {
            position: absolute;
            z-index: 3;
        }

        .an1 {
            bottom: -10vh;
            height: 80vh;
            width: 100%;
            object-fit: contain;
            z-index: 4;
        }

        .an2 {
            bottom: 22vh;
            right: 14vw;
            height: 10vh;
            width: 20%;
            transform: rotate(22deg);
            object-fit: contain;
        }

        .an3 {
            bottom: 0vh;
            height: 25vh;
            left: -30vw;
            width: 100%;
            object-fit: contain;
        }
        
        .an4 {
            height: 19vh;
            bottom: 17.4vh;
            right: 24vw;
            width: 100%;
            object-fit: contain;
        }

        .an5 {
            height: 35vh;
            top: 17vh;
            right: 25vw;
            width: 100%;
            object-fit: contain;
        }

        .an6 {
            height: 60vh;
            bottom: -16vh;
            left: 36vw;
            object-fit: contain;
            width: 100%;
        }

        .an8 {
            height: 30vh;
            top: 24vh;
            left: 28vw;
            object-fit: contain;
            width: 100%;
        }

        .text-2 {
            z-index: 0;
        }

        .z-dex {
            z-index: 2;
        }

        .treewomen {
            position: absolute;
            height: 160vh;
            width: 50vw;
            object-fit: cover;
            z-index: 1;
        }
        
        /* section 3 */
        .heads, .heads-invert, .cross {
            position: absolute;
            z-index: 3;
        }

        .big-trees-invert {
            bottom: 0;
            height: 100%;
            position: absolute;
            width: 100%;
        }

        .hillBG {
            bottom: -10vh;
            height: 80%;
            position: absolute;
            width: 100%;
            z-index: 3;
            object-fit: cover;
        }

        .heads {
            bottom: 10vh;
            right: 35vw;
            height: 50vh;
            width: 100%;
            object-fit: contain;
        }

        .heads-invert {
            bottom: -10vh;
            left: 0vw;
            height: 50vh;
            width: 100%;
            object-fit: contain;
            transform: scaleX(-1);
        }

        .cross {
            bottom: 37vh;
            z-index: 2;
            right: 2vw;
            height: 50vh;
            width: 100%;
            object-fit: contain;
        }

        .treewomen3l {
            position: absolute;
            height: 50vh;
            width: 100%;
            bottom: 25vh;
            right: 20vw;
            object-fit: contain;
            z-index: 2;
        }

        .treewomen3r {
            position: absolute;
            height: 50vh;
            width: 100%;
            bottom: 25vh;
            left: 10vw;
            object-fit: contain;
            z-index: 2;
        }
    </style>
    