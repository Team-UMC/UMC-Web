import { useMediaQuery } from 'react-responsive';

const checkDevice = () => {
  // 가로 2560px~
  const isLargeDesktop = useMediaQuery({
    query: '(min-width:2560px)',
  });

  // 가로 1920px ~ 2559px
  const isSmallDesktop = useMediaQuery({
    query: '(min-width:1920px) and (max-width: 2559px)',
  });

  // 가로 1680px ~ 1919px
  const isLargeLaptop = useMediaQuery({
    query: '(min-width: 1680px) and (max-width: 1919px)',
  });

  // 가로 1440px ~ 1679px
  const isSmallLaptop = useMediaQuery({
    query: '(min-width: 1440px) and (max-width: 1679px)',
  });

  // 가로 1024px ~ 1439px
  const isPad = useMediaQuery({
    query: '(min-width: 1024px) and (max-width: 1439px)',
  });

  // 가로 ~1023px
  const isPhone = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  if (isLargeDesktop) {
    return 'LargeDesktop';
  }

  if (isSmallDesktop) {
    return 'SmallDesktop';
  }

  if (isLargeLaptop) {
    return 'LargeLaptop';
  }

  if (isSmallLaptop) {
    return 'SmallLaptop';
  }

  if (isPad) {
    return 'Pad';
  }

  if (isPhone) {
    return 'Phone';
  }

  return 'Phone';
};

export { checkDevice };
