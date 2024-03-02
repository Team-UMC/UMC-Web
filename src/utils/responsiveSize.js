// 기기 사이즈별 width, height 조절 함수
const responsiveWidthHeight = (
  device,
  largeDesktopSize,
  smallDesktopSize,
  largeLaptopSize,
  smallLaptopSize,
  padSize,
  phoneSize,
) => {
  if (device === 'LargeDesktop') {
    return {
      width: `${largeDesktopSize.width}px`,
      height:
        largeDesktopSize.height === '100%'
          ? '100%'
          : typeof largeDesktopSize.height === 'string'
            ? 'auto'
            : `${largeDesktopSize.height}px`,
    };
  }

  if (device === 'SmallDesktop') {
    return {
      width: `${smallDesktopSize.width}px`,
      height:
        smallDesktopSize.height === '100%'
          ? '100%'
          : typeof smallDesktopSize.height === 'string'
            ? 'auto'
            : `${smallDesktopSize.height}px`,
    };
  }

  if (device === 'LargeLaptop') {
    return {
      width: `${largeLaptopSize.width}px`,
      height:
        largeLaptopSize.height === '100%'
          ? '100%'
          : typeof largeLaptopSize.height === 'string'
            ? 'auto'
            : `${largeLaptopSize.height}px`,
    };
  }

  if (device === 'SmallLaptop') {
    return {
      width: `${smallLaptopSize.width}px`,
      height:
        smallLaptopSize.height === '100%'
          ? '100%'
          : typeof smallLaptopSize.height === 'string'
            ? 'auto'
            : `${smallLaptopSize.height}px`,
    };
  }

  if (device === 'Pad') {
    return {
      width: `${padSize.width}px`,
      height:
        padSize.height === '100%'
          ? '100%'
          : typeof padSize.height === 'string'
            ? 'auto'
            : `${padSize.height}px`,
    };
  }

  if (device === 'Phone') {
    return {
      width: `${phoneSize.width}px`,

      height:
        phoneSize.height === '100%'
          ? '100%'
          : typeof phoneSize.height === 'string'
            ? 'auto'
            : `${phoneSize.height}px`,
    };
  }

  return {
    width: `${phoneSize.width}px`,
    height:
      typeof phoneSize.height === 'string' ? 'auto' : `${phoneSize.height}px`,
  };
};

module.exports = { responsiveWidthHeight };
