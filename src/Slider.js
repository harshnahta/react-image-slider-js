/** @format */

const Slider = ({ styles, imageBlock, sliderIndex, setData, isLoop }) => {
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
export default Slider;
