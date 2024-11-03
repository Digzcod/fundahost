import React from 'react'

interface PropsContent {
    header: React.ReactNode
    child: React.ReactNode
}

const NoContent: React.FC<PropsContent> = ({header, child}) => {
    return (
        <div className="mt-4 p-4 border  rounded-lg flex flex-col items-center py-[5rem] md:py-[7rem] mb-[2rem] md:mb-[4rem]">
          <div className="text-center mt-[1rem] mb-[2rem]">
            <h3 className="text-[14px] font-normal">
              !!OPPS😎😎 {header}
            </h3>
            <section className="flex items-center space-x-3">
              <div className="p-3 bg-violet-500 rounded-[100%]">
          
              </div>
              <p className="text-xl sm:text-2xl  md:text-3xl font-bold text-purple-600 mt-2">
                {child}
              </p>
            </section>
          </div>
        </div>
      );
}

export default NoContent