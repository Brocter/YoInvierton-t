import logo  from './../assets/logo.png'

const Footer = () => {
    return(
        <section className='bg-primaryBlue pb-4 mt-auto'>
        <div className='flex justify-between items-center px-4'>
          <img className="ml-[-1rem]" src={logo} alt="logo" />
          <div className='flex items-center justify-between mt-[-2.4rem] gap-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.9798 11.41C21.6398 5.60995 16.3698 1.13996 10.2998 2.13996C6.1198 2.82996 2.7698 6.21994 2.1198 10.3999C1.7398 12.8199 2.23983 15.1099 3.32983 16.9999L2.43981 20.3099C2.23981 21.0599 2.92979 21.7399 3.66979 21.5299L6.9298 20.6299C8.4098 21.4999 10.1398 21.9999 11.9898 21.9999C17.6298 21.9999 22.3098 17.0299 21.9798 11.41ZM16.8798 15.7199C16.7898 15.8999 16.6798 16.07 16.5398 16.23C16.2898 16.5 16.0198 16.7 15.7198 16.82C15.4198 16.95 15.0898 17.01 14.7398 17.01C14.2298 17.01 13.6798 16.89 13.1098 16.64C12.5298 16.39 11.9598 16.0599 11.3898 15.6499C10.8098 15.2299 10.2698 14.7599 9.74981 14.2499C9.22981 13.7299 8.76978 13.1799 8.34978 12.6099C7.93979 12.0399 7.6098 11.4699 7.3698 10.8999C7.1298 10.3299 7.00982 9.77996 7.00982 9.25996C7.00982 8.91996 7.06981 8.58995 7.18981 8.28995C7.30981 7.97995 7.49983 7.69996 7.76983 7.44996C8.08983 7.12996 8.43981 6.97996 8.80981 6.97996C8.94981 6.97996 9.08978 7.00995 9.21978 7.06995C9.34978 7.12995 9.46981 7.21995 9.55981 7.34995L10.7198 8.98994C10.8098 9.11994 10.8798 9.22994 10.9198 9.33994C10.9698 9.44994 10.9898 9.54994 10.9898 9.64994C10.9898 9.76994 10.9498 9.88996 10.8798 10.01C10.8098 10.13 10.7198 10.2499 10.5998 10.3699L10.2198 10.7699C10.1598 10.8299 10.1398 10.8899 10.1398 10.9699C10.1398 11.0099 10.1498 11.0499 10.1598 11.0899C10.1798 11.1299 10.1898 11.1599 10.1998 11.1899C10.2898 11.3599 10.4498 11.5699 10.6698 11.8299C10.8998 12.0899 11.1398 12.3599 11.3998 12.6199C11.6698 12.8899 11.9298 13.1299 12.1998 13.3599C12.4598 13.5799 12.6798 13.73 12.8498 13.82C12.8798 13.83 12.9098 13.8499 12.9398 13.8599C12.9798 13.8799 13.0198 13.88 13.0698 13.88C13.1598 13.88 13.2198 13.85 13.2798 13.79L13.6598 13.41C13.7898 13.28 13.9098 13.19 14.0198 13.13C14.1398 13.06 14.2498 13.0199 14.3798 13.0199C14.4798 13.0199 14.5798 13.0399 14.6898 13.0899C14.7998 13.1399 14.9198 13.2 15.0398 13.29L16.6998 14.4699C16.8298 14.5599 16.9198 14.67 16.9798 14.79C17.0298 14.92 17.0598 15.0399 17.0598 15.1799C16.9998 15.3499 16.9598 15.5399 16.8798 15.7199Z" fill="white"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.1895C22 19.8295 19.83 21.9995 16.19 21.9995H15C14.45 21.9995 14 21.5495 14 20.9995V15.2295C14 14.9595 14.22 14.7295 14.49 14.7295L16.25 14.6995C16.39 14.6895 16.51 14.5895 16.54 14.4495L16.89 12.5395C16.92 12.3595 16.78 12.1895 16.59 12.1895L14.46 12.2195C14.18 12.2195 13.96 11.9995 13.95 11.7295L13.91 9.27951C13.91 9.11951 14.04 8.97952 14.21 8.97952L16.61 8.93951C16.78 8.93951 16.91 8.80953 16.91 8.63953L16.87 6.2395C16.87 6.0695 16.74 5.93951 16.57 5.93951L13.87 5.97952C12.21 6.00952 10.89 7.36951 10.92 9.02951L10.97 11.7795C10.98 12.0595 10.76 12.2795 10.48 12.2895L9.28 12.3095C9.11 12.3095 8.98001 12.4395 8.98001 12.6095L9.01001 14.5095C9.01001 14.6795 9.14 14.8095 9.31 14.8095L10.51 14.7895C10.79 14.7895 11.01 15.0095 11.02 15.2795L11.11 20.9795C11.12 21.5395 10.67 21.9995 10.11 21.9995H7.81C4.17 21.9995 2 19.8295 2 16.1795V7.80951C2 4.16951 4.17 1.99951 7.81 1.99951H16.19C19.83 1.99951 22 4.16951 22 7.80951V16.1895Z" fill="white"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M20.0217 6.22217C25.3599 6.22217 25.7777 6.63995 25.7777 11.9782V20.0217C25.7777 25.3599 25.3599 25.7777 20.0217 25.7777H11.9782C6.63995 25.7777 6.22217 25.3599 6.22217 20.0217V11.9782C6.22217 6.63995 6.63995 6.22217 11.9782 6.22217H20.0217ZM13.2057 19.6226C15.2066 19.6226 16.8284 18.0008 16.8284 15.9999C16.8284 13.9991 15.2066 12.3773 13.2057 12.3773C11.2048 12.3773 9.58306 13.9991 9.58306 15.9999C9.58306 18.0008 11.2053 19.6226 13.2057 19.6226ZM18.9835 19.4475C19.9737 19.4475 20.7764 17.9039 20.7764 15.9999C20.7764 14.0959 19.9737 12.5524 18.9835 12.5524C17.9933 12.5524 17.1906 14.0959 17.1906 15.9999C17.1906 17.9039 17.9933 19.4475 18.9835 19.4475ZM21.7688 19.0791C22.1133 19.0791 22.3924 17.7004 22.3924 15.9999C22.3924 14.2995 22.1133 12.9208 21.7688 12.9208C21.4244 12.9208 21.1453 14.2995 21.1453 15.9999C21.1453 17.7004 21.4244 19.0791 21.7688 19.0791Z" fill="white"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.7271 3C9.33825 3 9.0392 3.0102 8.10102 3.054C7.1646 3.0978 6.52488 3.2502 5.96549 3.4728C5.37912 3.6984 4.84729 4.0524 4.40752 4.5108C3.96025 4.96028 3.61408 5.5041 3.39311 6.1044C3.17674 6.6768 3.02722 7.332 2.98441 8.2902C2.9422 9.2496 2.93164 9.555 2.93164 12C2.93164 14.445 2.94161 14.7504 2.98441 15.7104C3.02722 16.6686 3.17615 17.3232 3.3937 17.8956C3.61417 18.4956 3.96012 19.0398 4.4081 19.4898C4.84738 19.9475 5.37883 20.3017 5.96549 20.5278C6.52488 20.7498 7.1646 20.9022 8.10102 20.946C9.0392 20.9898 9.33825 21 11.7271 21C14.1159 21 14.415 20.9898 15.3532 20.946C16.2896 20.9022 16.9293 20.7498 17.4887 20.5272C18.0751 20.3016 18.6069 19.9476 19.0467 19.4892C19.4939 19.0397 19.8401 18.4959 20.0611 17.8956C20.278 17.3232 20.427 16.6686 20.4698 15.7104C20.5126 14.7504 20.5226 14.4444 20.5226 12C20.5226 9.5556 20.5126 9.2496 20.4698 8.2896C20.427 7.3314 20.278 6.6768 20.0605 6.1044C19.8397 5.50384 19.4935 4.95979 19.0461 4.5102C18.6068 4.05253 18.0754 3.69831 17.4887 3.4722C16.9293 3.2508 16.289 3.0978 15.3526 3.054C14.415 3.0108 14.1165 3 11.7271 3ZM11.7271 4.6218C14.0755 4.6218 14.354 4.6308 15.2816 4.674C16.1389 4.7142 16.6045 4.86 16.9147 4.9842C17.3251 5.1468 17.6183 5.3424 17.9261 5.6568C18.234 5.9718 18.4245 6.2718 18.5834 6.6918C18.7042 7.0092 18.8473 7.4856 18.8866 8.3628C18.9288 9.312 18.9376 9.597 18.9376 12C18.9376 14.403 18.9288 14.688 18.8866 15.6372C18.8473 16.5144 18.7048 16.9908 18.5834 17.3082C18.4427 17.6991 18.2181 18.0528 17.9261 18.3432C17.6424 18.642 17.2967 18.8718 16.9147 19.0158C16.6045 19.1394 16.1389 19.2858 15.2816 19.326C14.354 19.3692 14.0761 19.3782 11.7271 19.3782C9.37812 19.3782 9.10019 19.3692 8.17256 19.326C7.3153 19.2858 6.84972 19.14 6.53954 19.0158C6.15749 18.8718 5.81186 18.6419 5.52806 18.3432C5.23615 18.0528 5.01155 17.6991 4.87075 17.3082C4.74995 16.9908 4.60688 16.5144 4.5676 15.6372C4.52538 14.688 4.51658 14.403 4.51658 12C4.51658 9.597 4.52538 9.312 4.5676 8.3628C4.60688 7.4856 4.74937 7.0092 4.87075 6.6918C5.02965 6.2718 5.2208 5.9718 5.52806 5.6568C5.81182 5.35803 6.15747 5.12819 6.53954 4.9842C6.84972 4.8606 7.3153 4.7142 8.17256 4.674C9.10019 4.6308 9.37871 4.6218 11.7271 4.6218V4.6218Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.7274 15.0028C11.342 15.0028 10.9604 14.9251 10.6043 14.7742C10.2483 14.6233 9.92474 14.4021 9.65222 14.1232C9.37971 13.8444 9.16354 13.5133 9.01605 13.149C8.86857 12.7846 8.79266 12.3941 8.79266 11.9998C8.79266 11.6054 8.86857 11.2149 9.01605 10.8506C9.16354 10.4862 9.37971 10.1552 9.65222 9.87635C9.92474 9.59749 10.2483 9.37629 10.6043 9.22538C10.9604 9.07446 11.342 8.99679 11.7274 8.99679C12.5057 8.99679 13.2522 9.31318 13.8026 9.87635C14.353 10.4395 14.6622 11.2033 14.6622 11.9998C14.6622 12.7962 14.353 13.5601 13.8026 14.1232C13.2522 14.6864 12.5057 15.0028 11.7274 15.0028V15.0028ZM11.7274 7.37379C10.5284 7.37379 9.3785 7.86117 8.53067 8.72871C7.68285 9.59626 7.20654 10.7729 7.20654 11.9998C7.20654 13.2267 7.68285 14.4033 8.53067 15.2709C9.3785 16.1384 10.5284 16.6258 11.7274 16.6258C12.9264 16.6258 14.0763 16.1384 14.9241 15.2709C15.772 14.4033 16.2483 13.2267 16.2483 11.9998C16.2483 10.7729 15.772 9.59626 14.9241 8.72871C14.0763 7.86117 12.9264 7.37379 11.7274 7.37379V7.37379ZM17.5635 7.28979C17.5635 7.5798 17.4509 7.85794 17.2505 8.06301C17.0501 8.26808 16.7783 8.38329 16.4948 8.38329C16.2114 8.38329 15.9396 8.26808 15.7392 8.06301C15.5388 7.85794 15.4262 7.5798 15.4262 7.28979C15.4262 6.99977 15.5388 6.72164 15.7392 6.51657C15.9396 6.3115 16.2114 6.19629 16.4948 6.19629C16.7783 6.19629 17.0501 6.3115 17.2505 6.51657C17.4509 6.72164 17.5635 6.99977 17.5635 7.28979" fill="white"/>
          </svg>
          </div>
        </div>
        <div className="text-white text-center mt-[-2rem] ">
        <p className='pb-6'>Designed & Developed by <b>Mayland Labs</b></p>
        <p className='pb-2'>Copyright © 2023 | All Rights Reserved</p>
        </div>
      </section>
    )
}

export default Footer;