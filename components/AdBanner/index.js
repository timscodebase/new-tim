import React, { useEffect } from 'react'

export default function AdBanner() {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: 'block',
      }}
      data-ad-client={process.env.GOOGLE_DATA_AD_CLIENT}
      data-ad-slot={process.env.GOOGLE_DATA_AD_SLOT}
    />
  )
}
