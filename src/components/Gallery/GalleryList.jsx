import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { GALLERY_DATAS } from './GalleryData';
import ViewIcon from 'assets/gallery/view.svg';
import LeftArrowIcon from 'assets/main/LeftArrow.svg';
import RightArrowIcon from 'assets/main/RightArrow.svg';
import GallerySearchBar from './GallerySearchBar';

const GalleryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 34px 32px;
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`;

const GalleryItemImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const GalleryItemViewCountWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 0 8px;
  box-sizing: border-box;
  cursor: default;

  color: black;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

const GalleryItemView = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.9);
  flex-direction: row;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  gap: 0 2px;
  border-radius: 12px;
  line-height: 19.2px;
`;

const GalleryItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
`;

const GalleryItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 2px 10px rgba(177, 177, 177, 0.66);
  padding: 12px 8px 11px 13px;
  gap: 4px;
`;

const GalleryItemInfoTitle = styled.div`
  color: black;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const GalleryItemInfoAuthorDateLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: default;

  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

const GalleryItemInfoAuthor = styled.div`
  color: black;
`;

const GalleryItemInfoDate = styled.div`
  color: #4b4b4b;
`;

const GalleryItemPaginateStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 58px;
  gap: 0 24px;
  font-size: 12px;
  font-family: 'Pretendard';
  word-wrap: break-word;
  cursor: pointer;
`;

const PageNumber = styled.div`
  color: ${(props) => (props.isActive ? '#000C76' : '#4B4B4B')};
  font-weight: ${(props) => (props.isActive ? '600' : '400')};
  padding: ${(props) => (props.isActive ? '4px 8px' : '0')};
  background: ${(props) => (props.isActive ? 'white' : 'none')};
  border-radius: ${(props) => (props.isActive ? '6px' : '0')};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${(props) => (props.isActive ? 'scale(1.1)' : 'none')};
  }
`;

const ArrowButton = styled.img`
  display: ${(props) => (props.isHidden ? 'none' : 'block')};
`;

const GalleryLink = styled(Link)`
  text-decoration: none;
`;

const GallerySearchBarLayout = styled(GallerySearchBar)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GalleryItemComponent = ({ item, index }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = itemRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const dx = x - xc;
      const dy = y - yc;

      itemRef.current.style.transform = `perspective(1000px) rotateX(${
        dy / -5
      }deg) rotateY(${dx / 50}deg)`;
    };

    const handleMouseLeave = () => {
      itemRef.current.style.transform = '';
    };

    itemRef.current.addEventListener('mousemove', handleMouseMove);
    itemRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (itemRef.current) {
        itemRef.current.removeEventListener('mousemove', handleMouseMove);
        itemRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <GalleryLink to={`/gallery/${item.id}`}>
      <GalleryItem ref={itemRef} key={index}>
        <GalleryItemImg src={item.src[0]} alt={item.alt} />
        <GalleryItemViewCountWrapper>
          <GalleryItemView>
            <img src={ViewIcon} alt="view-icon" />
            {item.view}
          </GalleryItemView>
          <GalleryItemCount>{item.count}</GalleryItemCount>
        </GalleryItemViewCountWrapper>
        <GalleryItemInfoWrapper>
          <GalleryItemInfoTitle>{item.title}</GalleryItemInfoTitle>
          <GalleryItemInfoAuthorDateLayout>
            <GalleryItemInfoAuthor>{item.author.name}</GalleryItemInfoAuthor>
            <GalleryItemInfoDate>{item.time}</GalleryItemInfoDate>
          </GalleryItemInfoAuthorDateLayout>
        </GalleryItemInfoWrapper>
      </GalleryItem>
    </GalleryLink>
  );
};

GalleryItemComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }).isRequired,
    time: PropTypes.string.isRequired,
    src: PropTypes.arrayOf(PropTypes.string).isRequired,
    alt: PropTypes.string.isRequired,
    view: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const GalleryList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(0);
  };

  const PER_PAGE = 16;
  const offset = currentPage * PER_PAGE;

  const filteredData = GALLERY_DATAS.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const pageCount = Math.ceil(filteredData.length / PER_PAGE);
  const pages = new Array(pageCount).fill(null).map((_, i) => i);

  return (
    <>
      <GalleryListContainer>
        {filteredData.slice(offset, offset + PER_PAGE).map((item, index) => (
          <GalleryItemComponent key={index} item={item} index={index} />
        ))}
      </GalleryListContainer>
      <GalleryItemPaginateStyle>
        <ArrowButton
          src={LeftArrowIcon}
          alt="previous"
          isHidden={currentPage === 0}
          onClick={() => handlePageClick(currentPage - 1)}
        />
        {pages.map((pageNumber) => (
          <PageNumber
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            isActive={pageNumber === currentPage}
          >
            {pageNumber + 1}
          </PageNumber>
        ))}
        <ArrowButton
          src={RightArrowIcon}
          alt="next"
          isHidden={currentPage === pageCount - 1}
          onClick={() => handlePageClick(currentPage + 1)}
        />
      </GalleryItemPaginateStyle>
      <GallerySearchBarLayout onSearch={handleSearch} />
    </>
  );
};

export default GalleryList;
