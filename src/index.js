/** @format */
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";

const LoadSwipper = ({
  sliderIndex = 0,
  images = [],
  imageSrcKey = "src",
  imageAltKey = "src",
  slideAnimationDuration = "600ms",
  objectFit = "fill",
  imageBackgroundColor = "rgba(0, 0, 0, 0.1)",
  isLoop = true,
}) => {
  return (
    images.length > 0 && (
      <LoadBlock
        sliderIndex={sliderIndex}
        images={images}
        imageSrcKey={imageSrcKey}
        imageAltKey={imageAltKey}
        sAnimDur={slideAnimationDuration}
        objectFit={objectFit}
        imgbg={imageBackgroundColor}
        isLoop={isLoop}
      />
    )
  );
};

const LoadBlock = ({
  sliderIndex = 0,
  images = [],
  imageSrcKey,
  imageAltKey,
  sAnimDur,
  objectFit,
  imgbg,
  isLoop,
}) => {
  const imageBlock = useRef();
  const screen = useRef();
  const [data, setData] = useState({
    sliderIndex: sliderIndex,
  });

  const transformImage = (imgBlock, animation = true) => {
    const width = imgBlock.clientWidth * data.sliderIndex + 1;
    imgBlock.style.transform = `translate3d(-${width - 1}px, 0px, 0px)`;
    imgBlock.style["transition-duration"] = `${animation ? sAnimDur : "0"}`;
    setTimeout(() => {
      imgBlock.style["transition-duration"] = `0ms`;
    }, 300);
  };
  useEffect(() => {
    screen.current.style["background-color"] = imgbg;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.sliderIndex >= 0 && data.sliderIndex < images.length) {
      transformImage(imageBlock.current);
      window.onresize = () => {
        transformImage(imageBlock.current, false);
      };
    } else {
      setData((preState) => ({
        ...preState,
        sliderIndex: 0,
      }));
    }
    return () => {
      window.onresize = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.sliderIndex]);

  return (
    <div className={styles.Content} ref={screen}>
      <div className={styles.customSlider}>
        {images.length > 0 ? (
          <div className={styles.inner} ref={imageBlock}>
            {images.map((img, index) => {
              return (
                <div className={styles.image} key={index}>
                  <img
                    src={imageSrcKey ? img[imageSrcKey] : img}
                    alt={imageAltKey ? img[imageAltKey] : img}
                    draggable="false"
                    style={{
                      objectFit: objectFit,
                    }}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h1>Images not availabe!</h1>
          </div>
        )}

        <Slider
          imageBlock={imageBlock}
          sliderIndex={data.sliderIndex}
          setData={setData}
          isLoop={isLoop}
        />
      </div>
    </div>
  );
};

const Slider = ({ imageBlock, sliderIndex, setData, isLoop }) => {
  const moveSlide = (k) => {
    const lng = imageBlock.current.children.length;
    let val = sliderIndex;
    if (k === "next") {
      if (lng - 1 === val) {
        if (isLoop) val = 0;
      } else {
        val += 1;
      }
    } else {
      if (val === 0) {
        if (isLoop) val = lng - 1;
      } else {
        val -= 1;
      }
    }
    const obj = {
      sliderIndex: val,
    };
    setData((preState) => ({
      ...preState,
      ...obj,
    }));
  };

  return (
    <>
      <button
        onClick={() => moveSlide("pre")}
        type="button"
        className={`${styles.navBtn} ${styles.prev}`}
        aria-label="Previous image"
        title="Previous image"
      />
      <button
        onClick={() => moveSlide("next")}
        type="button"
        className={`${styles.navBtn} ${styles.next}`}
        aria-label="Next image"
        title="Next image"
      />
    </>
  );
};

export default LoadSwipper;
