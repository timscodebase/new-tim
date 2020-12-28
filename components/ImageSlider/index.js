import { useEffect, useRef, useReducer } from 'react'
import { useSwipeable } from 'react-swipeable'
import imageUrlBuilder from '@sanity/image-url'
import PropTypes from 'prop-types'

import client from '../../client'
import styles from './ImageSlider.module.css'

const builder = imageUrlBuilder(client)

let GLOBALPHOTOS = {}

function urlFor(source) {
  return builder.image(source)
}

function useTilt(active) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || !active) {
      return
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    }

    const el = ref.current

    const handleMouseMove = e => {
      if (!el) {
        return
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect()
      }
      state.mouseX = e.clientX
      state.mouseY = e.clientY
      const px = (state.mouseX - state.rect.left) / state.rect.width
      const py = (state.mouseY - state.rect.top) / state.rect.height

      el.style.setProperty('--px', px)
      el.style.setProperty('--py', py)
    }

    el.addEventListener('mousemove', handleMouseMove)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
    }
  }, [active])

  return ref
}

const initialState = {
  slideIndex: 0,
}

const photosReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % GLOBALPHOTOS.length,
    }
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? GLOBALPHOTOS.length - 1 : state.slideIndex - 1,
    }
  }
}

function Slide({ photo, offset }) {
  const active = offset === 0 ? true : null
  const ref = useTilt(active)

  return (
    <div
      ref={ref}
      className={styles.slide}
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className={styles.slideBackground}
        style={{
          backgroundImage: `url('${urlFor(photo.image)}')`,
        }}
      />
      <div
        className={styles.slideContent}
        style={{
          backgroundImage: `url('${urlFor(photo.image)}')`,
        }}
      />
    </div>
  )
}

Slide.propTypes = {
  photo: PropTypes.object,
  offset: PropTypes.number,
}

export default function ImageSlider({ photos }) {
  const [state, dispatch] = useReducer(photosReducer, initialState)

  const handlers = useSwipeable({
    onSwipedLeft: () => dispatch({ type: 'PREV' }),
    onSwipedRight: () => dispatch({ type: 'NEXT' }),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  useEffect(() => {
    GLOBALPHOTOS = photos
  }, [])

  return (
    <div className={styles.slideWrapper}>
      <div {...handlers} className={styles.slides}>
        <button type="button" onClick={() => dispatch({ type: 'PREV' })}>
          ‹
        </button>
        {[...photos, ...photos, ...photos].map((photo, i) => {
          const offset = photos.length + (state.slideIndex - i)
          return <Slide photo={photo} offset={offset} key={i} />
        })}
        <button type="button" onClick={() => dispatch({ type: 'NEXT' })}>
          ›
        </button>
      </div>
    </div>
  )
}

ImageSlider.propTypes = {
  photos: PropTypes.array,
}
