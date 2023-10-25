

const NextArrowButton = (props) => {
    const {onClick,background,arrowColor} = props;
    return(
        
        <div className={`top-[calc(50%-20px)] absolute right-3 bg-${background} rounded-full flex justify-center items-center p-3 cursor-pointer font-bold z-[5] text-[1.2rem]`} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15.2002 10.4899L13.2302 8.51993L10.0202 5.30993C9.34018 4.63993 8.18018 5.11993 8.18018 6.07993V12.3099V17.9199C8.18018 18.8799 9.34018 19.3599 10.0202 18.6799L15.2002 13.4999C16.0302 12.6799 16.0302 11.3199 15.2002 10.4899Z" fill={arrowColor}/>
        </svg>
        </div>
       
    )
}

export default NextArrowButton