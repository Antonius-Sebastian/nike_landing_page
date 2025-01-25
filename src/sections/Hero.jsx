import { useState } from 'react'

import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'

import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'

import { shoes, statistics } from '../constant'

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
    return (
        <section
            id="home"
            className="w-full max-container flex xl:flex-row flex-col justify-center gap-10 min-h-screen"
        >
            <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28">
                <p className="capitalize text-xl font-montserrat text-coral-red">
                    Our summer collection
                </p>
                <h1 className="capitalize mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        The new arrival
                    </span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">
                        nike
                    </span>{' '}
                    Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort, and
                    innovation for your active life
                </p>
                <Button label="Shop now" icon={arrowRight} />
                <div className="flex flex-wrap justify-start items-start w-full gap-16 mt-20">
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-palanquin font-bold">
                                {stat.value}
                            </p>
                            <p className="leading-7 font-montserrat text-slate-gray">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="shoe collection"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />
                <div className="flex sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe, index) => (
                        <div key={index}>
                            <ShoeCard
                                imgUrl={shoe}
                                changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
