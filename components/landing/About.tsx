import React from 'react'
import anon from "@/assets/images/anon.png"
import Image from "next/image";
import {Button} from "@/components/ui/Button";


const About = () => {
  return (
      <div className="flex flex-wrap  items-center justify-between w-full  ">
              <Image src={anon} alt="anon" className='hue-rotate-90 saturate-150'/>
              <div className="lg:w-2/5 space-y-8">
                <h2 className="text-2xl text-white">Everyone has a story they cant share—until now.</h2>
                <p className="text-muted-foreground">Confessly is a space built for honest, unfiltered expression. Whether its a hidden confession, a fleeting fantasy, a deep mood, or a secret you have been carrying alone, here you can share it all anonymously.</p>
                <p className="text-muted-foreground">We believe that sharing your feelings—without fear of judgment or exposure—can be both healing and empowering. Confessly connects you to a supportive community where your voice is valued, even when your identity stays hidden.</p>

                <Button variant="secondary" size="sm">
                  Ready to share ?
                </Button>
              </div>
          </div>
  )
}

export default About