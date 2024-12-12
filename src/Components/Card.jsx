

const Card = ({ card }) => {
    
    const {id,title,description,channelName,views,likes,dislikes,img,uploadDate} = card
  return (
      <div className={`w-fit lg:w-80 flex flex-col justify-center rounded-xl my-6 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-black hover:border-2 h-fit`}>
          <div className="">
              <img src={img} alt="" className="h-40 object-cover rounded-lg w-full" />
          </div>
          <div className="flex flex-row  gap-6 my-3 ">
              <div className="">
                  <img src="/public/image/icon1.jpg" className="w-14 h-10 rounded-full" alt="" />
              </div>
              <div>
                  <p className="">{description}</p>
                  <p className="font-light">{channelName}</p>
                  <div className="flex gap-3">
                      <p  className="font-light" >Views : {views}</p>
                      <p  className="font-light">{ uploadDate}</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Card