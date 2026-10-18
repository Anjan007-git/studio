// Smooth Scroll Slider — Originkit (adapted for Next.js App Router with responsive mobile support)
"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import type { CSSProperties } from "react"

type ImageValue = string | { src?: string } | null | undefined

type ImageInput = ImageValue | { image?: ImageValue; offsetY?: number }

interface Slide {
  src: string | null
  offsetY: number
}

export interface SmoothScrollSliderProps {
  images?: ImageInput[]
  slideWidth?: number
  slideHeight?: number
  spacing?: number
  direction?: "right" | "left"
  smoothness?: number
  radius?: number
  dim?: number
  background?: string
  sensitivity?: number
  loop?: boolean
  /**
   * Pass a ref to the outer scroll-budget container.
   * When provided the slider is driven by page scroll (no re-renders)
   * and the internal wheel/pointer handlers are disabled.
   */
  scrollSectionRef?: React.RefObject<HTMLDivElement | null>
  style?: CSSProperties
}

const PLACEHOLDER_COUNT = 8
const MAX_SCALE = 2.2
const MIN_SCALE = 0.15

function wrap(value: number, span: number): number {
  return ((value % span) + span) % span
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function resolveSrc(value: ImageValue): string | null {
  if (!value) return null
  if (typeof value === "string") return value || null
  const src = (value as { src?: string }).src
  return typeof src === "string" && src ? src : null
}

function imageOf(item: ImageInput): string | null {
  if (item && typeof item === "object" && "image" in item)
    return resolveSrc((item as { image?: ImageValue }).image)
  return resolveSrc(item as ImageValue)
}

function offsetOf(item: ImageInput): number {
  if (item && typeof item === "object" && "offsetY" in item) {
    const offset = (item as { offsetY?: number }).offsetY
    return typeof offset === "number" && isFinite(offset) ? offset : 0
  }
  return 0
}

function placeholderFill(index: number): string {
  const hue = (index * 47 + 210) % 360
  return `linear-gradient(150deg, hsl(${hue} 42% 34%), hsl(${(hue + 45) % 360} 55% 10%))`
}

interface Frame {
  count: number
  step: number
  slideWidth: number
  width: number
  ease: number
  maxScale: number
  minScale: number
  dim: number
  loop: boolean
  flip: boolean
  isMobile: boolean
}

const DEFAULT_IMAGES: ImageInput[] = [
  { image: { src: "https://images.unsplash.com/photo-1557747357-b3302a733ae4?w=900&auto=format&fit=crop&q=60" }, offsetY: 0 },
  { image: { src: "https://images.unsplash.com/photo-1637961239801-d0dfcc1a9340?w=900&auto=format&fit=crop&q=60" }, offsetY: 0 },
  { image: { src: "https://images.unsplash.com/photo-1579205149708-f5b24c5a04e5?w=900&auto=format&fit=crop&q=60" }, offsetY: 0 },
  { image: { src: "https://images.unsplash.com/photo-1748572495955-4f301f8e93ba?w=900&auto=format&fit=crop&q=60" }, offsetY: 0 },
  { image: { src: "https://images.unsplash.com/photo-1664705792423-89f2016228eb?w=900&auto=format&fit=crop&q=60" }, offsetY: 0 },
  { image: { src: "https://images.unsplash.com/photo-1758600433991-933fb663161f?w=900&auto=format&fit=crop&q=60" }, offsetY: 0 },
  { image: { src: "https://images.unsplash.com/photo-1643325297990-cbdde391d7c8?w=900&auto=format&fit=crop&q=60" }, offsetY: 0 },
  { image: { src: "https://images.unsplash.com/photo-1601233750964-940fc7080ba5?w=900&auto=format&fit=crop&q=60" }, offsetY: 0 },
  { image: { src: "https://images.unsplash.com/photo-1748154228682-4be26335c713?w=900&auto=format&fit=crop&q=60" }, offsetY: 0 },
  { image: { src: "https://images.unsplash.com/photo-1631700010907-eeca2d4f2a39?w=900&auto=format&fit=crop&q=60" }, offsetY: 0 },
]

export default function SmoothScrollSlider({
  images = DEFAULT_IMAGES,
  slideWidth = 340,
  slideHeight = 420,
  spacing = 2,
  direction = "right",
  smoothness = 8,
  radius = 16,
  dim = 7,
  background = "#000000",
  sensitivity = 5,
  loop = true,
  scrollSectionRef,
  style,
}: SmoothScrollSliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const nodes = useRef<(HTMLDivElement | null)[]>([])
  const target = useRef(0)
  const current = useRef(0)
  const userSwipeOffset = useRef(0)
  const [width, setWidth] = useState(0)

  // Responsive slide sizing
  const isMobile = width > 0 && width < 768
  const effectiveSlideWidth = isMobile ? Math.min(220, Math.max(170, Math.round(width * 0.58))) : slideWidth
  const effectiveSlideHeight = isMobile ? Math.min(270, Math.round(effectiveSlideWidth * 1.2)) : slideHeight
  const effectiveRadius = isMobile ? Math.min(radius, 12) : radius

  // ─── Scroll-driven mode ───────────────────────────────────────────────────
  useEffect(() => {
    if (!scrollSectionRef) return

    const SLIDE_STEP = effectiveSlideWidth + clamp(spacing, 0, 10) * (isMobile ? 12 : 20)
    const MAX_OFFSET = SLIDE_STEP * 10

    const update = () => {
      const outer = scrollSectionRef.current
      const container = containerRef.current
      if (!container) return

      let baseScrollOffset = 0
      const isDesktopSticky =
        outer && window.innerWidth >= 1024 && outer.offsetHeight - window.innerHeight > 50

      if (isDesktopSticky && outer) {
        const rect = outer.getBoundingClientRect()
        const scrollable = outer.offsetHeight - window.innerHeight
        if (scrollable > 0) {
          const scrolled = -rect.top
          const progress = Math.max(0, Math.min(1, scrolled / scrollable))
          baseScrollOffset = progress * MAX_OFFSET
        }
      } else {
        // Mobile / natural flow: smoothly link viewport scroll without jarring shifts
        const cRect = container.getBoundingClientRect()
        const vh = window.innerHeight || 800
        const totalDistance = vh + cRect.height
        const distanceScrolled = vh - cRect.top
        const progress = Math.max(0, Math.min(1, distanceScrolled / totalDistance))
        const MOBILE_MAX_OFFSET = SLIDE_STEP * 3.5
        baseScrollOffset = progress * MOBILE_MAX_OFFSET
      }

      target.current = baseScrollOffset + userSwipeOffset.current
    }

    update()

    const onLenis = () => update()
    const onScroll = () => update()
    const onResize = () => update()

    window.addEventListener("lenis-scroll", onLenis, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    return () => {
      window.removeEventListener("lenis-scroll", onLenis)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [scrollSectionRef, effectiveSlideWidth, spacing, isMobile])

  const source = useMemo<Slide[]>(() => {
    const resolved: Slide[] = []
    for (const item of images ?? []) {
      const src = imageOf(item)
      if (src) resolved.push({ src, offsetY: offsetOf(item) })
    }
    return resolved.length
      ? resolved
      : Array.from({ length: PLACEHOLDER_COUNT }, () => ({ src: null, offsetY: 0 }))
  }, [images])

  const step = effectiveSlideWidth + clamp(spacing, 0, 10) * (isMobile ? 12 : 20)
  const ease = isMobile ? 0.08 : (0.15 - (clamp(smoothness, 0, 10) / 10) * 0.13)
  const dimAmount = (clamp(dim, 0, 10) / 10) * 0.85
  const wheelMultiplier = 0.4 + (clamp(sensitivity, 0, 10) / 10) * 1.2
  const dragMultiplier = 0.6 + (clamp(sensitivity, 0, 10) / 10) * 1.8
  const flip = direction === "left"

  const repeats = useMemo(() => {
    if (!loop || width <= 0 || step <= 0) return 1
    return Math.max(1, Math.ceil((width + step * 2) / (source.length * step)))
  }, [loop, width, step, source.length])

  const slides = useMemo(() => {
    const out: Slide[] = []
    for (let r = 0; r < repeats; r += 1) out.push(...source)
    return out
  }, [source, repeats])

  const frame = useRef<Frame>({
    count: 0,
    step: 0,
    slideWidth: 0,
    width: 0,
    ease: 0.075,
    maxScale: MAX_SCALE,
    minScale: MIN_SCALE,
    dim: 0,
    loop: true,
    flip: false,
    isMobile: false,
  })

  useEffect(() => {
    frame.current = {
      count: slides.length,
      step,
      slideWidth: effectiveSlideWidth,
      width,
      ease,
      maxScale: isMobile ? 1.12 : MAX_SCALE,
      minScale: isMobile ? 0.88 : MIN_SCALE,
      dim: isMobile ? dimAmount * 0.5 : dimAmount,
      loop,
      flip,
      isMobile,
    }
  }, [slides.length, step, effectiveSlideWidth, width, ease, isMobile, dimAmount, loop, flip])

  const input = useRef({ wheelMultiplier, dragMultiplier, flip })
  useEffect(() => {
    input.current = { wheelMultiplier, dragMultiplier, flip }
  }, [wheelMultiplier, dragMultiplier, flip])

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width)
    })
    observer.observe(node)
    setWidth(node.getBoundingClientRect().width)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    nodes.current.length = slides.length
  }, [slides.length])

  useEffect(() => {
    let raf = 0
    let last = 0
    let isVisible = false

    const container = containerRef.current
    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== "undefined" && container) {
      observer = new IntersectionObserver(
        (entries) => {
          const wasVisible = isVisible
          isVisible = entries[0]?.isIntersecting ?? false
          if (isVisible && !wasVisible) {
            last = performance.now()
            cancelAnimationFrame(raf)
            raf = requestAnimationFrame(tick)
          }
        },
        { rootMargin: "150px 0px" }
      )
      observer.observe(container)
    }

    const tick = (now: number) => {
      if (!isVisible) {
        last = 0
        return
      }

      raf = requestAnimationFrame(tick)
      const c = frame.current
      const delta = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60
      last = now
      if (!c.count || c.step <= 0 || c.width <= 0) return

      // Gentle ambient drift on mobile so it always feels live and smooth
      if (c.isMobile) {
        target.current += delta * 12
      }

      const span = c.count * c.step

      if (c.loop) {
        if (current.current > span || current.current < -span) {
          const shift = Math.trunc(current.current / span) * span
          current.current -= shift
          target.current -= shift
          userSwipeOffset.current -= shift
        }
      } else {
        target.current = clamp(target.current, 0, (c.count - 1) * c.step)
      }

      const k = 1 - Math.pow(1 - c.ease, delta * 60)
      current.current += (target.current - current.current) * k

      const pad = (c.width - c.slideWidth) / 2
      const half = c.width / 2

      for (let i = 0; i < c.count; i += 1) {
        const node = nodes.current[i]
        if (!node) continue

        const raw = i * c.step - current.current + pad
        const x = c.loop ? wrap(raw + c.step, span) - c.step : raw
        const distance = x + c.slideWidth / 2 - half

        let scale: number
        let push: number
        if (c.isMobile) {
          // Mobile: subtle, graceful scale without massive overflow
          const distRatio = Math.abs(distance) / (c.width * 0.6)
          scale = clamp(1.08 - distRatio * 0.18, c.minScale, c.maxScale)
          push = 0
        } else {
          // Desktop: original wide-range perspective zoom
          if (distance > 0) {
            scale = Math.min(c.maxScale, 1 + distance / c.width)
            push = (scale - 1) * c.slideWidth * 0.75
          } else {
            scale = Math.max(c.minScale, 1 + distance / c.width)
            push = 0
          }
        }

        const left = c.flip ? c.width - c.slideWidth - (x + push) : x + push
        node.style.transform = `translate3d(${left}px, -50%, 0) scale(${scale})`

        if (c.dim > 0 && scale < 1) {
          const t = (1 - scale) / Math.max(0.001, 1 - c.minScale)
          node.style.filter = `brightness(${1 - t * c.dim})`
        } else {
          node.style.filter = "none"
        }
      }
    }

    return () => {
      cancelAnimationFrame(raf)
      observer?.disconnect()
    }
  }, [])

  // ─── Wheel handler (disabled in scroll-driven mode) ───────────────────────
  useEffect(() => {
    if (scrollSectionRef) return

    const node = containerRef.current
    if (!node) return
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const dominant =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
      target.current += dominant * input.current.wheelMultiplier
    }
    node.addEventListener("wheel", onWheel, { passive: false })
    return () => node.removeEventListener("wheel", onWheel)
  }, [scrollSectionRef])

  // ─── Pointer / touch drag handler (safe on mobile, never locks page scroll) ───────
  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    let activePointerId: number | null = null
    let startX = 0
    let startY = 0
    let lastX = 0
    let isDragging = false
    let isIntentional = false

    const onDown = (event: PointerEvent) => {
      if (event.button !== 0 && event.pointerType === "mouse") return
      if (activePointerId !== null) return

      activePointerId = event.pointerId
      startX = event.clientX
      startY = event.clientY
      lastX = event.clientX
      isDragging = false
      isIntentional = false
    }

    const onMove = (event: PointerEvent) => {
      if (activePointerId !== event.pointerId) return

      const totalDx = event.clientX - startX
      const totalDy = event.clientY - startY
      const absX = Math.abs(totalDx)
      const absY = Math.abs(totalDy)

      if (!isIntentional) {
        const threshold = event.pointerType === "touch" ? 14 : 6
        const minRatio = event.pointerType === "touch" ? 1.8 : 1.0

        if (absX > threshold || absY > threshold) {
          isIntentional = true
          // Only claim drag if motion is clearly horizontal
          if (absX > absY * minRatio) {
            isDragging = true
            try {
              node.setPointerCapture(event.pointerId)
            } catch {
              // Ignore
            }
          } else {
            // Predominantly vertical or diagonal touch: NEVER hijack or freeze vertical scroll!
            activePointerId = null
            return
          }
        } else {
          return
        }
      }

      if (!isDragging) return

      const dx = event.clientX - lastX
      lastX = event.clientX
      const deltaDrag = (input.current.flip ? dx : -dx) * input.current.dragMultiplier
      target.current += deltaDrag
      userSwipeOffset.current += deltaDrag
    }

    const onUp = (event: PointerEvent) => {
      if (activePointerId !== event.pointerId) return
      activePointerId = null
      isDragging = false
      isIntentional = false
      if (node.hasPointerCapture(event.pointerId)) {
        try {
          node.releasePointerCapture(event.pointerId)
        } catch {
          // Ignore
        }
      }
    }

    node.addEventListener("pointerdown", onDown, { passive: true })
    node.addEventListener("pointermove", onMove, { passive: true })
    node.addEventListener("pointerup", onUp, { passive: true })
    node.addEventListener("pointercancel", onUp, { passive: true })

    return () => {
      node.removeEventListener("pointerdown", onDown)
      node.removeEventListener("pointermove", onMove)
      node.removeEventListener("pointerup", onUp)
      node.removeEventListener("pointercancel", onUp)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background,
        cursor: "grab",
        touchAction: "pan-y",
        opacity: width > 0 ? 1 : 0,
        transition: "opacity 0.35s ease",
        ...style,
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={(el) => {
            nodes.current[i] = el
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: effectiveSlideWidth,
            height: effectiveSlideHeight,
            borderRadius: effectiveRadius,
            overflow: "hidden",
            background: slide.src ? "#111" : placeholderFill(i),
            willChange: "transform, filter",
            transform: "translate3d(0, -50%, 0)",
            pointerEvents: "none",
          }}
        >
          {slide.src ? (
            <img
              src={slide.src}
              alt=""
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: `50% calc(50% + ${slide.offsetY}px)`,
                display: "block",
                userSelect: "none",
              }}
            />
          ) : null}
        </div>
      ))}
    </div>
  )
}
