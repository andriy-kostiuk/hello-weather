import React from 'react';

interface Props {
  width: number;
  height: number;
  id: string;
};

export function SharedSvgWeatherIcons({width, id, height}: Props) {
  switch (id) {
    case '01d' :
      return <svg width={width} height={height} viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z"
          fill="url(#paint0_linear_2_179)" />
        <path
          d="M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778Z"
          fill="#FFB300" />
        <defs>
          <linearGradient id="paint0_linear_2_179" x1="59.5229" y1="31.0143" x2="59.5229" y2="87.2546"
                          gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC227" />
            <stop offset="1" stopColor="#FFB300" />
          </linearGradient>
        </defs>
      </svg>;
    case '01n' :
      return <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.3 0.5L3 1.7L4.2 2.3L3 3L2.3 4.2L1.7 3L0.5 2.3L1.7 1.7L2.3 0.5Z" fill="#FFA500" />
        <path
          d="M13.5 12.2C13.5 8.49995 15.5 5.29995 18.5 3.49995C17 2.59995 15.3 2.19995 13.5 2.19995C8 2.19995 3.5 6.69995 3.5 12.2C3.5 17.7 8 22.2 13.5 22.2C15.3 22.2 17 21.7 18.5 20.9C15.5 19.1999 13.5 15.9 13.5 12.2Z"
          fill="#FFA500" stroke="#FFA500" strokeWidth="2" strokeLinejoin="round" />
        <path d="M22.3 10.5L23 11.7L24.2 12.3L23 13L22.3 14.2L21.7 13L20.5 12.3L21.7 11.7L22.3 10.5Z" fill="#FFA500" />
      </svg>;

    case '02d' :
      return <svg width={width} height={height} viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 22V25" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M6.63605 19.364L4.51473 21.4853" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 13H1" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M6.63605 6.63599L4.51473 4.51467" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 4V1" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M19.364 6.63599L21.4853 4.51467" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 13H25" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M19.364 19.364L21.4853 21.4853" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M13 18C15.7614 18 18 15.7614 18 13C18 10.2386 15.7614 8 13 8C10.2386 8 8 10.2386 8 13C8 15.7614 10.2386 18 13 18Z"
          fill="#FFA500" stroke="#FFA500" strokeWidth="2" />
        <path
          d="M40.7 21.4C40.7 16.8 37 13.2 32.5 13.2C31.5 13.2 30.6 13.4 29.7 13.7C29.4 10.3 26.6 7.5 23.1 7.5C19.4 7.5 16.4 10.5 16.4 14.2C16.4 15 16.6 15.8 16.8 16.5C16.5 16.4 16.1 16.4 15.8 16.4C12.1 16.4 9.09998 19.4 9.09998 23.1C9.09998 26.7 12 29.7 15.6 29.8H32.8C37.2 29.3 40.7 25.8 40.7 21.4Z"
          fill="#57A0EE" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>;

    case '02n' :
      return <svg width={width} height={height} viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.64 0.199951L24.2 1.15995L25.16 1.63995L24.2 2.19995L23.64 3.15995L23.16 2.19995L22.2 1.63995L23.16 1.15995L23.64 0.199951Z"
          fill="#FFA500" />
        <path
          d="M39.64 8.19995L40.2 9.15995L41.16 9.63995L40.2 10.2L39.64 11.16L39.16 10.2L38.2 9.63995L39.16 9.15995L39.64 8.19995Z"
          fill="#FFA500" />
        <path
          d="M32.6 9.55994C32.6 6.59994 34.2 4.03994 36.6 2.59994C35.4 1.87994 34.04 1.55994 32.6 1.55994C28.2 1.55994 24.6 5.15994 24.6 9.55994C24.6 13.9599 28.2 17.5599 32.6 17.5599C34.04 17.5599 35.4 17.1599 36.6 16.5199C34.2 15.1599 32.6 12.5199 32.6 9.55994Z"
          fill="#FFA500" stroke="#FFA500" strokeWidth="1.6" strokeLinejoin="round" />
        <path
          d="M32.7 19.4C32.7 14.8 29 11.2 24.5 11.2C23.5 11.2 22.6 11.4 21.7 11.7C21.4 8.3 18.6 5.5 15.1 5.5C11.4 5.5 8.39997 8.5 8.39997 12.2C8.39997 13 8.59997 13.8 8.79997 14.5C8.49997 14.4 8.09997 14.4 7.79997 14.4C4.09997 14.4 1.09998 17.4 1.09998 21.1C1.09998 24.7 3.99998 27.7 7.59998 27.8H24.8C29.2 27.3 32.7 23.8 32.7 19.4Z"
          fill="#57A0EE" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>;
    case '03d' :
    case '03n' :
      return <svg width={width} height={height} viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M32.7 15.4C32.7 10.8 29 7.2 24.5 7.2C23.5 7.2 22.6 7.4 21.7 7.7C21.4 4.3 18.6 1.5 15.1 1.5C11.4 1.5 8.39997 4.5 8.39997 8.2C8.39997 9 8.59997 9.8 8.79997 10.5C8.49997 10.4 8.09997 10.4 7.79997 10.4C4.09997 10.4 1.09998 13.4 1.09998 17.1C1.09998 20.7 3.99998 23.7 7.59998 23.8H24.8C29.2 23.3 32.7 19.8 32.7 15.4Z"
          fill="#57A0EE" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>;
    case '04d' :
    case '04n' :
      return <svg width={width} height={height} viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.62 9.24002C23.62 6.48003 21.4 4.32002 18.7 4.32002C18.1 4.32002 17.56 4.44002 17.02 4.62002C16.84 2.58002 15.16 0.900024 13.06 0.900024C10.84 0.900024 9.03997 2.70002 9.03997 4.92002C9.03997 5.40002 9.15997 5.88002 9.27997 6.30002C9.09997 6.24002 8.85997 6.24002 8.67997 6.24002C6.45997 6.24002 4.65997 8.04002 4.65997 10.26C4.65997 12.42 6.39997 14.22 8.55997 14.28H18.88C21.52 13.98 23.62 11.88 23.62 9.24002Z"
          fill="#91C0F8" stroke="white" strokeWidth="0.72" strokeLinejoin="round" />
        <path
          d="M32.7 20.4C32.7 15.8 29 12.2 24.5 12.2C23.5 12.2 22.6 12.4 21.7 12.7C21.4 9.3 18.6 6.5 15.1 6.5C11.4 6.5 8.39997 9.5 8.39997 13.2C8.39997 14 8.59997 14.8 8.79997 15.5C8.49997 15.4 8.09997 15.4 7.79997 15.4C4.09997 15.4 1.09998 18.4 1.09998 22.1C1.09998 25.7 3.99998 28.7 7.59998 28.8H24.8C29.2 28.3 32.7 24.8 32.7 20.4Z"
          fill="#57A0EE" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>;
    case '09d' :
    case '09n' :
      return <svg width={width} height={height} viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.62 9.24002C23.62 6.48003 21.4 4.32002 18.7 4.32002C18.1 4.32002 17.56 4.44002 17.02 4.62002C16.84 2.58002 15.16 0.900024 13.06 0.900024C10.84 0.900024 9.03997 2.70002 9.03997 4.92002C9.03997 5.40002 9.15997 5.88002 9.27997 6.30002C9.09997 6.24002 8.85997 6.24002 8.67997 6.24002C6.45997 6.24002 4.65997 8.04002 4.65997 10.26C4.65997 12.42 6.39997 14.22 8.55997 14.28H18.88C21.52 13.98 23.62 11.88 23.62 9.24002Z"
          fill="#91C0F8" stroke="white" strokeWidth="0.72" strokeLinejoin="round" />
        <path
          d="M32.7 20.4C32.7 15.8 29 12.2 24.5 12.2C23.5 12.2 22.6 12.4 21.7 12.7C21.4 9.3 18.6 6.5 15.1 6.5C11.4 6.5 8.39997 9.5 8.39997 13.2C8.39997 14 8.59997 14.8 8.79997 15.5C8.49997 15.4 8.09997 15.4 7.79997 15.4C4.09997 15.4 1.09998 18.4 1.09998 22.1C1.09998 25.7 3.99998 28.7 7.59998 28.8H24.8C29.2 28.3 32.7 24.8 32.7 20.4Z"
          fill="#57A0EE" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M11.8871 32.2896L10.4979 40.168" stroke="#91C0F8" strokeWidth="2" strokeLinecap="round"
              strokeDasharray="4 4" />
        <path d="M16.1736 31.0145L14.7844 38.893" stroke="#91C0F8" strokeWidth="2" strokeLinecap="round"
              strokeDasharray="4 4" />
        <path d="M19.9392 32.694L18.55 40.5724" stroke="#91C0F8" strokeWidth="2" strokeLinecap="round"
              strokeDasharray="4 4" />
      </svg>;


    case '10d' :
      return <svg width={width} height={height} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 22V25" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M6.63605 19.364L4.51473 21.4853" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 13H1" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M6.63605 6.63599L4.51473 4.51467" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 4V1" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M19.364 6.63599L21.4853 4.51467" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 13H25" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path d="M19.364 19.364L21.4853 21.4853" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M13 18C15.7614 18 18 15.7614 18 13C18 10.2386 15.7614 8 13 8C10.2386 8 8 10.2386 8 13C8 15.7614 10.2386 18 13 18Z"
          fill="#FFA500" stroke="#FFA500" strokeWidth="2" />
        <path
          d="M40.7 21.4C40.7 16.8 37 13.2 32.5 13.2C31.5 13.2 30.6 13.4 29.7 13.7C29.4 10.3 26.6 7.5 23.1 7.5C19.4 7.5 16.4 10.5 16.4 14.2C16.4 15 16.6 15.8 16.8 16.5C16.5 16.4 16.1 16.4 15.8 16.4C12.1 16.4 9.09998 19.4 9.09998 23.1C9.09998 26.7 12 29.7 15.6 29.8H32.8C37.2 29.3 40.7 25.8 40.7 21.4Z"
          fill="#57A0EE" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M20.9175 32.9429L19.5283 40.8213" stroke="#91C0F8" strokeWidth="2" strokeLinecap="round"
              strokeDasharray="4 7" />
        <path d="M27.1736 32.0151L25.7845 39.8936" stroke="#91C0F8" strokeWidth="2" strokeLinecap="round"
              strokeDasharray="4 7" />
      </svg>;
    case '10n' :
      return <svg width={width} height={height} viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.64 0.199951L24.2 1.15995L25.16 1.63995L24.2 2.19995L23.64 3.15995L23.16 2.19995L22.2 1.63995L23.16 1.15995L23.64 0.199951Z"
          fill="#FFA500" />
        <path
          d="M39.64 8.19995L40.2 9.15995L41.16 9.63995L40.2 10.2L39.64 11.16L39.16 10.2L38.2 9.63995L39.16 9.15995L39.64 8.19995Z"
          fill="#FFA500" />
        <path
          d="M32.6 9.55994C32.6 6.59994 34.2 4.03994 36.6 2.59994C35.4 1.87994 34.04 1.55994 32.6 1.55994C28.2 1.55994 24.6 5.15994 24.6 9.55994C24.6 13.9599 28.2 17.5599 32.6 17.5599C34.04 17.5599 35.4 17.1599 36.6 16.5199C34.2 15.1599 32.6 12.5199 32.6 9.55994Z"
          fill="#FFA500" stroke="#FFA500" strokeWidth="1.6" strokeLinejoin="round" />
        <path
          d="M32.7 19.4C32.7 14.8 29 11.2 24.5 11.2C23.5 11.2 22.6 11.4 21.7 11.7C21.4 8.3 18.6 5.5 15.1 5.5C11.4 5.5 8.39997 8.5 8.39997 12.2C8.39997 13 8.59997 13.8 8.79997 14.5C8.49997 14.4 8.09997 14.4 7.79997 14.4C4.09997 14.4 1.09998 17.4 1.09998 21.1C1.09998 24.7 3.99998 27.7 7.59998 27.8H24.8C29.2 27.3 32.7 23.8 32.7 19.4Z"
          fill="#57A0EE" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M13.9127 30.9396L12.5235 38.818" stroke="#91C0F8" strokeWidth="2" strokeLinecap="round"
              strokeDasharray="4 7" />
        <path d="M20.1689 30.0118L18.7797 37.8903" stroke="#91C0F8" strokeWidth="2" strokeLinecap="round"
              strokeDasharray="4 7" />
      </svg>;

    case '11d' :
    case '11n' :
      return <svg width={width} height={height} viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.62 9.24002C23.62 6.48003 21.4 4.32002 18.7 4.32002C18.1 4.32002 17.56 4.44002 17.02 4.62002C16.84 2.58002 15.16 0.900024 13.06 0.900024C10.84 0.900024 9.04003 2.70002 9.04003 4.92002C9.04003 5.40002 9.16003 5.88002 9.28003 6.30002C9.10003 6.24002 8.86003 6.24002 8.68003 6.24002C6.46003 6.24002 4.66003 8.04002 4.66003 10.26C4.66003 12.42 6.40003 14.22 8.56003 14.28H18.88C21.52 13.98 23.62 11.88 23.62 9.24002Z"
          fill="#91C0F8" stroke="white" strokeWidth="0.72" strokeLinejoin="round" />
        <path
          d="M32.7 18.4C32.7 13.8 29 10.2 24.5 10.2C23.5 10.2 22.6 10.4 21.7 10.7C21.4 7.3 18.6 4.5 15.1 4.5C11.4 4.5 8.39997 7.5 8.39997 11.2C8.39997 12 8.59997 12.8 8.79997 13.5C8.49997 13.4 8.09997 13.4 7.79997 13.4C4.09997 13.4 1.09998 16.4 1.09998 20.1C1.09998 23.7 3.99998 26.7 7.59998 26.8H24.8C29.2 26.3 32.7 22.8 32.7 18.4Z"
          fill="#57A0EE" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M13.1599 18.52H20.5999L15.6799 27.16H20.3599L9.79995 39.52L13.8799 30.28H9.31995L13.1599 18.52Z"
              fill="#FFA500" stroke="white" strokeWidth="1.2" />
      </svg>;

    case '13d' :
      return <svg width={width} height={height} viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 26.7999V30.3999" stroke="#FFA500" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M8.36322 23.6367L5.81764 26.1823" stroke="#FFA500" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M5.19995 16H1.59995" stroke="#FFA500" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M8.36322 8.36328L5.81764 5.8177" stroke="#FFA500" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M16 5.19995V1.59995" stroke="#FFA500" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M23.6367 8.36328L26.1823 5.8177" stroke="#FFA500" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M26.8 16H30.4" stroke="#FFA500" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M23.6367 23.6367L26.1823 26.1823" stroke="#FFA500" strokeWidth="2.4" strokeLinecap="round" />
        <path
          d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
          fill="#FFA500" stroke="#FFA500" strokeWidth="2.4" />
        <path
          d="M41.545 25.09C41.545 21.18 38.4 18.12 34.575 18.12C33.725 18.12 32.96 18.29 32.195 18.545C31.94 15.655 29.56 13.275 26.585 13.275C23.44 13.275 20.89 15.825 20.89 18.97C20.89 19.65 21.06 20.33 21.23 20.925C20.975 20.84 20.635 20.84 20.38 20.84C17.235 20.84 14.685 23.39 14.685 26.535C14.685 29.595 17.15 32.145 20.21 32.23H34.83C38.57 31.805 41.545 28.83 41.545 25.09Z"
          fill="#57A0EE" stroke="white" strokeWidth="1.275" strokeLinejoin="round" />
        <path d="M23 33.5V38.5" stroke="#57A0EE" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M24.7678 34.2322L21.2322 37.7677" stroke="#57A0EE" strokeLinecap="round" />
        <path d="M25.5 36H20.5" stroke="#57A0EE" strokeLinecap="round" />
        <path d="M24.7678 37.7678L21.2322 34.2323" stroke="#57A0EE" strokeLinecap="round" />
        <path d="M32 33.5V38.5" stroke="#57A0EE" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M33.7678 34.2322L30.2322 37.7677" stroke="#57A0EE" strokeLinecap="round" />
        <path d="M34.5 36H29.5" stroke="#57A0EE" strokeLinecap="round" />
        <path d="M33.7678 37.7678L30.2322 34.2323" stroke="#57A0EE" strokeLinecap="round" />
      </svg>;
    case '13n' :
      return <svg width={width} height={height} viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.54 0L24.1 0.96L25.06 1.44L24.1 2L23.54 2.96L23.06 2L22.1 1.44L23.06 0.96L23.54 0Z"
              fill="#FFA500" />
        <path d="M39.54 8L40.1 8.96L41.06 9.44L40.1 10L39.54 10.96L39.06 10L38.1 9.44L39.06 8.96L39.54 8Z"
              fill="#FFA500" />
        <path
          d="M32.5 9.35999C32.5 6.39999 34.1 3.83999 36.5 2.39999C35.3 1.67999 33.94 1.35999 32.5 1.35999C28.1 1.35999 24.5 4.95999 24.5 9.35999C24.5 13.76 28.1 17.36 32.5 17.36C33.94 17.36 35.3 16.96 36.5 16.32C34.1 14.96 32.5 12.32 32.5 9.35999Z"
          fill="#FFA500" stroke="#FFA500" strokeWidth="1.6" strokeLinejoin="round" />
        <path
          d="M32.6 19.2001C32.6 14.6001 28.9 11 24.4 11C23.4 11 22.5 11.2 21.6 11.5C21.3 8.10005 18.5 5.30005 15 5.30005C11.3 5.30005 8.3 8.30005 8.3 12C8.3 12.8 8.5 13.6 8.7 14.3C8.4 14.2 8 14.2 7.7 14.2C4 14.2 1 17.2 1 20.9C1 24.5 3.9 27.5 7.5 27.6H24.7C29.1 27.1 32.6 23.6001 32.6 19.2001Z"
          fill="#57A0EE" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M12 30.5V35.5" stroke="#57A0EE" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M13.7678 31.2322L10.2322 34.7677" stroke="#57A0EE" strokeLinecap="round" />
        <path d="M14.5 33H9.5" stroke="#57A0EE" strokeLinecap="round" />
        <path d="M13.7678 34.7678L10.2322 31.2323" stroke="#57A0EE" strokeLinecap="round" />
        <path d="M21 30.5V35.5" stroke="#57A0EE" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M22.7678 31.2322L19.2322 34.7677" stroke="#57A0EE" strokeLinecap="round" />
        <path d="M23.5 33H18.5" stroke="#57A0EE" strokeLinecap="round" />
        <path d="M22.7678 34.7678L19.2322 31.2323" stroke="#57A0EE" strokeLinecap="round" />
      </svg>;

    case '15d' :
    case '15n' :
      return <svg
        width={width} height={height}
        viewBox="0 0 217.43 217.43">
        <path fill="#57A0EE" d="M144.797,47.095c0-4.142-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h129.797
    C141.439,54.595,144.797,51.237,144.797,47.095z" />
        <path fill="#57A0EE" d="M209.93,70.405H58.632c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H209.93c4.142,0,7.5-3.358,7.5-7.5
    S214.072,70.405,209.93,70.405z" />
        <path fill="#57A0EE" d="M174.53,116.214c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H22.446c-4.142,0-7.5,3.358-7.5,7.5
    c0,4.142,3.358,7.5,7.5,7.5H174.53z" />
        <path fill="#57A0EE" d="M199.441,132.024H47.619c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h151.822c4.142,0,7.5-3.358,7.5-7.5
    S203.583,132.024,199.441,132.024z" />
        <path fill="#57A0EE" d="M125.759,162.835H25.068c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h100.69c4.142,0,7.5-3.358,7.5-7.5
    C133.259,166.193,129.901,162.835,125.759,162.835z" />
      </svg>;
    default :
      return null;
  }
};
