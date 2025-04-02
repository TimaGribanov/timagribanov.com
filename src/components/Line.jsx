'use client'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useEffect} from 'react'

gsap.registerPlugin(ScrollTrigger)

const Line = () => {
  useEffect(() => {
    let mm = gsap.matchMedia()

    mm.add("(min-width: 800px", () => {
      const path = document.getElementById('path');
      const length = path.getTotalLength()

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#line',
          start: 'clamp(top center)',
          end: '100% center',
          markers: false,
          scrub: true,
          toggleActions: 'play none reverse none',
        },
      })
    }, [])

    mm.add("(max-width: 799px", () => {
      const path = document.getElementById('path2');
      const length = path.getTotalLength()

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#line2',
          start: 'clamp(top top)',
          end: '100% center',
          markers: false,
          scrub: true,
          toggleActions: 'play none reverse none',
        },
      })
    })
  })

  return (
    <div>
      <svg
        preserveAspectRatio="xMinyMid meet"
        id="line"
        viewBox="0 0 1000 2200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path"
          d="M -156 112 C 486 126 5.8628 448.291 59 644 C 131 855 421 781 374 560 C 352 451 197 351 207 538 C 220 690 439 673 322.909 865.537 C 264 965 79.3992 1007.94 100 1261.99 C 151 1712 795 1348 513 1142.5 C 152.717 927.625 138 1558 225 1698 C 468 2126 -81 1897 -97 2299 C -115 2528 90 2750 168 2594 C 402 2126 -302 2596 476 2606 C 1018 2619 332 1888 211 2831 C 269 3226 395 3275 1001 3217"
          strokeWidth="20"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        preserveAspectRatio="xMinyMid meet"
        id="line2"
        viewBox="0 0 1000 12000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path2"
          d="M -105 92 C 180 1110 640 276 721 1353 C 769 1924 11 1727 -199 2465 C -517 3541 303 2856 934 4057 C 1107 4372 80 4783 704 5197 C 1710 5910 -229 5795 672 7429 C 1322 8529 296 9166 316 9161 C -298 9714 111 11957 2583 12512"
          strokeWidth="40"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default Line