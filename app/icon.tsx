import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/svg+xml'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: '#0c0f1a',
          color: '#e5b45b',
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        L
      </div>
    ),
    { ...size },
  )
}
