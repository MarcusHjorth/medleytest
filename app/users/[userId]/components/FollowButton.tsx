'use client';
import React,{ useState } from 'react'


export default function FollowButton() {
    const [follow, setFollow ] = useState(false)
 
    const followFunction = () => {
      setFollow(!follow)
      console.log(`You now ${follow ? "follow" : "unfollow"} this person`);
    }

  return (
    <button onClick={followFunction} className="bg-red-100 rounded-[10px] w-[120px] h-[50px] hover:bg-red-50">
        { follow ? "follow" : "unfollow"}
    </button>
  )
}
