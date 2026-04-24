"use client"

import Image from "next/image";
import {useState, useRef, useEffect} from "react";

const PostF = ({items}:{items:any[]}) => {
    const [open,setOpen] = useState(false)
    const [video, VidUrl] = useState("")
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }
    // useEffect(()=>{
    //     // console.log(videoRef)
    // },[videoRef])

    return (
        <>
            {items?.map((e:any, index:number) => {
                const video = e.video
                return(
                    <span key={index} className={"flex flex-col w-fit h-full items-center gap-2 cursor-pointer hover:opacity-70 "} title={e.title} onClick={() => {
                        setOpen(true)
                        VidUrl(video)
                        setIsMuted(true)
                    }}>
                        <div className={"w-20 h-20 rounded-full relative ring-[#fc1a73] ring-3"} dir={"rtl"}>
                            <Image alt={e.title} src={!e.Banner ? e.Banner : "/placeholder.png"} sizes={"100%"} fill className={"w-full h-full rounded-full object-cover"} />
                        </div>
                        <div className={'text-[#fc1a73] w-fit max-w-15 overflow-hidden text-nowrap text-sm'} dir={"ltr"}>ahmad</div>
                    </span>
                )
            })}

            <div className={`flex items-center fixed ${open ? "flex" : "hidden"} justify-center w-full h-full z-20 inset-0`}>
                <div className={`fixed bg-black/50 w-full h-full z-20 cursor-pointer`} onClick={() => setOpen(false)}></div>
                {(open && video) ?
                    <div className={"w-fit h-fit z-30"}>
                    <div className={"relative w-fit h-fit"}>
                        <video
                            ref={videoRef}
                            src={video}
                            className={"w-auto max-h-[90vh] rounded-lg"}
                            controls={false}
                            muted={true}
                            autoPlay={true}
                            preload={"preload"}
                            playsInline={true}
                            onContextMenu={(e)=>{
                                e.preventDefault()
                            }}
                            onTouchStart={()=>{
                                videoRef.current!.pause()
                            }}
                            onTouchEnd={()=>{
                                videoRef.current!.play()
                            }}
                        />
                        <button
                            className={"absolute top-2 left-2 z-40 bg-black/70 rounded-full p-2 text-white hover:bg-black/90"}
                            onClick={toggleMute}
                        >
                            {isMuted ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                    <line x1="23" y1="9" x2="17" y2="15" />
                                    <line x1="17" y1="9" x2="23" y2="15" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                </svg>
                            )}
                        </button>
                    </div>
                   </div>

                    :
                    null
                }
            </div>
        </>
    )
}
export default PostF
