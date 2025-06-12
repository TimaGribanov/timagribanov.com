'use client'

import Header from '@/app/cv/components/Header'
import Main from '@/app/cv/components/Main'
import {useRef} from 'react'
import {useReactToPrint} from 'react-to-print'
import {Download} from "react-bootstrap-icons";

export default function Page() {
  const contentRef = useRef(null)
  const reactToPrintFn = useReactToPrint({contentRef})

  return (
    <div>
      <div ref={contentRef}>
        <Header/>
        <Main/>
      </div>
      <div id="download-btn" className="d-flex justify-content-center align-items-center" onClick={reactToPrintFn}>
        <Download/>
      </div>
    </div>
  )
}