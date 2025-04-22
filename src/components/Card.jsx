import PlayLottie from "./common/PlayLottie"


const Card = ({ data }) => {
  const { title, info, parts, style, animationData, id } = data
  return (
    <div className=" text-black-main w-full my-0 grid grid-cols-2 mb-[7.75rem] max-991:mb-0 grid-rows-[40rem]  max-991:grid-cols-[1fr] max-991:auto-rows-[35rem] max-991:grid-rows-[35rem] max-767:auto-rows-[30rem] max-767:grid-rows-[30rem]">
      <div className={"rounded-[4.375rem] max-767:rounded-3xl flex flex-col p-16 max-991:p-12 bg-white-main w-full font-dm relative items-stretch"}>
        <h2 className="tracking-[-2px] text-[4rem] max-991:text-[2.5rem] max-991:tracking-[0] font-semibold whitespace-pre mb-8 font-darker leading-[.71]">{title}</h2>
        <p className="text-[1rem] text-card-step-border-course leading-[1.2]  mb-16">{info}</p>
        {parts.map((part, i) => <div key={i} className={`flex py-4 items-center ${i == parts.length - 1 ? '' : 'border-b border-card-step-border-course'}`}>
          <div className="tracking-[-2px] text-[2rem] font-bold leading-[1] whitespace-pre">{i + 1}{i == 0 ? ' ' : ''}</div>
          <div className="ml-12 ">
            <div className="text-[1.1rem] font-medium tracking-[-1px] ">{part}</div>
          </div>
        </div>)}
      </div>

      <div className={`rounded-[4.375rem] max-767:rounded-3xl flex overflow-hidden bg-brand-color ${id % 2 == 0 ? '-order-1 max-991:order-1 ' : ''} max-991:-top-[60%] relative items-center `}>
        <div className="items-center flex relative flex-col ">
          <div className={"relative right-0 w-[125%] max-991:w-[140%] " + style}>
            <PlayLottie width='100%' autoplay loop animationData={animationData} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Card
