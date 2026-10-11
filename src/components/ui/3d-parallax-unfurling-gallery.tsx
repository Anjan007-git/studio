"use client";

import React, {
  useRef,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const DEFAULT_GALLERY_IMAGES = [
  "https://cdn.21st.dev/assets/mirror/a9/a9c2900d44fe6288b344f447cb12a05f7e64c439479a8ccb977d3b20eb371156.jpg",
  "https://cdn.21st.dev/assets/mirror/29/29cf6ad39eb198c05b8d915fca0becfd3d270d510d32eaec1b886c426c681c67.jpg",
  "https://cdn.21st.dev/assets/mirror/61/6154958e9df110914005256ff2319d43a2c2e0fc8bb54e9f8bce7b91fdce5df1.jpg",
  "https://cdn.21st.dev/assets/mirror/6d/6db92aff3c02cce69e2c672a6dd4e99cbf5c55d68fbf08c460527e6c7c5b64ba.jpg",
  "https://cdn.21st.dev/assets/mirror/42/42ad2d0680dba697d578434e5af5620c7ab1c7c55bc36cec3b55eec8b7a79cbf.jpg",
  "https://cdn.21st.dev/assets/mirror/cd/cd3dc09b1bbed97cfc879e2c5e62fdbc68dc4070b6105e476410d70e31d1e459.jpg",
  "https://cdn.21st.dev/assets/mirror/02/0232d63e3e0cb8d3599a77e29f87f8ec4b9fadfd031592296b3f19a730a5348c.jpg",
  "https://cdn.21st.dev/assets/mirror/56/562b212caa6ec06d8b0b313660dac6aa0bbfb729092cc4f16d04558a319af6b1.jpg",
  "https://cdn.21st.dev/assets/mirror/02/02cbcd62720734d469f2ea8e5ed7a212e18cb05e73457445b4d755ad0ae1fcd8.jpg",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  "https://cdn.21st.dev/assets/mirror/c4/c42df7c9c444a1189dad0570c0d01986454cd6a10eaf253a9ab40eb921a5bae5.jpg",
  "https://cdn.21st.dev/assets/mirror/27/275fbf3f84c5258c7a8235a8a47022f847d0f408c950288c532aefa83d072a2c.jpg",
  "https://cdn.21st.dev/assets/mirror/7e/7e2fb073870b2f578a37a693b1e0c9402a98201149509b54da2f86a2ee6abf5e.jpg",
  "https://cdn.21st.dev/assets/mirror/3d/3d74651780292fb5a2ba23e525d9d09860bb83fbfafc7ede17b8e3662d7b1022.jpg",
];

interface ImageCardProps {
  src: string;
  onLoad?: () => void;
}

const ImageCard = ({ src, onLoad }: ImageCardProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    setCurrentSrc(
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    );
  };

  return (
    <div className="w-full h-[180px] sm:h-[260px] md:h-[340px] lg:h-[400px] flex-shrink-0 bg-[#0d0d10] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-white/20 cursor-pointer relative will-change-transform backface-hidden preserve-3d">
      <img
        src={currentSrc}
        alt="TRIFECTA Spatial Archive"
        loading="lazy"
        decoding="async"
        onLoad={onLoad}
        onError={handleError}
        className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export interface ParallaxGalleryProps {
  isStandalone?: boolean;
  images?: string[];
  className?: string;
}

export default function ParallaxUnfurlingGallery({
  isStandalone = false,
  images = DEFAULT_GALLERY_IMAGES,
  className = "",
}: ParallaxGalleryProps) {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const loadedCountRef = useRef(0);

  const handleItemLoad = useCallback(() => {
    loadedCountRef.current += 1;
    if (!isReady && loadedCountRef.current >= 1) setIsReady(true);
  }, [isReady]);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const colMedia = useMemo(() => {
    const col1Base = images.filter((_, i) => i % 4 === 0);
    const col2Base = images.filter((_, i) => i % 4 === 1);
    const col3Base = images.filter((_, i) => i % 4 === 2);
    const col4Base = images.filter((_, i) => i % 4 === 3);

    return {
      col1: [...col1Base, ...col1Base],
      col2: [...col2Base, ...col2Base],
      col3: [...col3Base, ...col3Base],
      col4: [...col4Base, ...col4Base],
    };
  }, [images]);

  const { scrollYProgress } = useScroll(
    isStandalone
      ? {
          target: containerRef,
          container: scrollWrapperRef,
          offset: ["start start", "end end"],
        }
      : {
          target: containerRef,
          offset: ["start start", "end end"],
        }
  );

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  // Banner animations (unfurls seamlessly as user initiates section scroll)
  const bannerWidth = useTransform(smoothProgress, [0, 0.15], ["90vw", "100vw"]);
  const bannerHeight = useTransform(smoothProgress, [0, 0.15], ["80vh", "100vh"]);
  const bannerRadius = useTransform(smoothProgress, [0, 0.15], ["32px", "0px"]);
  const bannerBorderWidth = useTransform(smoothProgress, [0, 0.15], ["2px", "0px"]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.1, 0.18], [1, 0.6, 0]);
  const titleTranslateY = useTransform(smoothProgress, [0, 0.18], [0, -30]);

  // 3D Matrix animations: translates forward along Z axis as you scroll down
  const rotateY = useTransform(smoothProgress, [0.15, 1], [-42, -6]);
  const rotateX = useTransform(smoothProgress, [0.15, 1], [24, 4]);
  const rotateZ = useTransform(smoothProgress, [0.15, 1], [14, 1]);
  const translateZ = useTransform(smoothProgress, [0.15, 1], [-850, 80]);

  // Track columns parallax animations
  const yCol1 = useTransform(smoothProgress, [0.15, 1], ["0%", "-38%"]);
  const yCol2 = useTransform(smoothProgress, [0.15, 1], ["-38%", "12%"]);
  const yCol3 = useTransform(smoothProgress, [0.15, 1], ["-4%", "-42%"]);
  const yCol4 = useTransform(smoothProgress, [0.15, 1], ["-30%", "20%"]);

  const content = (
    <section
      ref={containerRef}
      className={`relative w-full h-[280vh] sm:h-[340vh] md:h-[400vh] bg-[#050505] text-white font-sans selection:bg-white selection:text-black ${className}`}
    >
      <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">
        <motion.div
          style={{
            width: bannerWidth,
            height: bannerHeight,
            borderRadius: bannerRadius,
            borderWidth: bannerBorderWidth,
            borderColor: "rgba(255, 255, 255, 0.12)",
          }}
          className="relative bg-[#060608] overflow-hidden flex items-center justify-center max-w-[1920px] mx-auto will-change-transform backface-hidden preserve-3d"
        >
          {/* Subtle editorial indicator badge during initial unfurling */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleTranslateY }}
            className="absolute top-8 left-8 sm:top-12 sm:left-12 z-30 pointer-events-none max-w-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#848484]">
                [Spatial Archive]
              </span>
            </div>
            <h3 className="text-sm sm:text-lg font-display font-medium text-white tracking-[-0.02em]">
              Immersive perspective across digital products &amp; systems.
            </h3>
            <p className="text-[11px] sm:text-xs text-[#848484] font-mono mt-1">
              Scroll down to propel forward through the matrix.
            </p>
          </motion.div>

          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            style={{ perspective: "1000px" }}
          >
            {/* Ambient Shadow Box Vignette */}
            <div className="absolute inset-0 z-20 shadow-[inset_0_120px_160px_-40px_rgba(5,5,5,1),inset_0_-120px_160px_-40px_rgba(5,5,5,1)]" />
            <div className="absolute inset-0 z-20 shadow-[inset_160px_0_160px_-40px_rgba(5,5,5,1),inset_-160px_0_160px_-40px_rgba(5,5,5,1)]" />

            {/* Parallax Image Grid Matrix (Smooth 3D Unfurling & Forward Motion) */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                rotateZ,
                z: translateZ,
                transformStyle: "preserve-3d",
              }}
              className="flex gap-3 sm:gap-4 md:gap-6 justify-center items-center w-[160vw] sm:w-[140vw] md:w-[120vw] h-[160vh] origin-center opacity-100 will-change-transform backface-hidden"
            >
              <motion.div
                style={{ y: yCol1 }}
                className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-[28vw] sm:w-[24vw] md:w-[22vw] min-w-[130px] sm:min-w-[170px] md:min-w-[210px] pointer-events-auto"
              >
                {colMedia.col1.map((src, index) => (
                  <ImageCard key={`col1-${index}`} src={src} onLoad={handleItemLoad} />
                ))}
              </motion.div>

              <motion.div
                style={{ y: yCol2 }}
                className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-[28vw] sm:w-[24vw] md:w-[22vw] min-w-[130px] sm:min-w-[170px] md:min-w-[210px] pointer-events-auto"
              >
                {colMedia.col2.map((src, index) => (
                  <ImageCard key={`col2-${index}`} src={src} onLoad={handleItemLoad} />
                ))}
              </motion.div>

              <motion.div
                style={{ y: yCol3 }}
                className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-[28vw] sm:w-[24vw] md:w-[22vw] min-w-[130px] sm:min-w-[170px] md:min-w-[210px] pointer-events-auto"
              >
                {colMedia.col3.map((src, index) => (
                  <ImageCard key={`col3-${index}`} src={src} onLoad={handleItemLoad} />
                ))}
              </motion.div>

              <motion.div
                style={{ y: yCol4 }}
                className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-[28vw] sm:w-[24vw] md:w-[22vw] min-w-[130px] sm:min-w-[170px] md:min-w-[210px] pointer-events-auto"
              >
                {colMedia.col4.map((src, index) => (
                  <ImageCard key={`col4-${index}`} src={src} onLoad={handleItemLoad} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  if (isStandalone) {
    return (
      <div
        ref={scrollWrapperRef}
        className="w-full h-screen overflow-y-auto overflow-x-hidden bg-[#050505]"
      >
        {content}
      </div>
    );
  }

  return content;
}
