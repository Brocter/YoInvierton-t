

const NextArrowButton = (props) => {
    const {onClick, background, arrowColor} = props;
    return(
        <div className={`top-[calc(50%-20px)] absolute left-3 bg-${background} rounded-full flex justify-center items-center p-3 cursor-pointer font-bold z-[5] text-[1.2rem]`} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13.9802 5.32024L10.7702 8.53024L8.80023 10.4902C7.97023 11.3202 7.97023 12.6702 8.80023 13.5002L13.9802 18.6802C14.6602 19.3602 15.8202 18.8702 15.8202 17.9202V12.3102V6.08024C15.8202 5.12024 14.6602 4.64024 13.9802 5.32024Z" fill={arrowColor}/>
        </svg>
        </div>
    )
}

export default NextArrowButton