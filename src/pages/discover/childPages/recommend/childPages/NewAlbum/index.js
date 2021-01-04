import React, { memo, useCallback, useEffect, useRef } from 'react';
import ThemeHeader from 'components/ThemeHeader';
import { NewDiscWrapper, AlbumsControl } from './style';
import { Carousel } from "antd";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { newAlbumAction } from '../../store/actionCreators';
import AlbumCover from 'components/AlbumCover';

export default memo(function NewDisc() {

  const dispatch = useDispatch();
  const { newAlbums = [] } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual);

  const carouselRef = useRef();

  useEffect(() => {
    dispatch(newAlbumAction(10));
  }, [dispatch]);

  const splitAlbums = useCallback((num) => {
    let index = 0;
    const outArr = [];
    while (index < newAlbums.length) {
      const arr = newAlbums.slice(index, index + num);
      index += num;
      outArr.push(arr);
    }
    return outArr;
  }, [newAlbums])

  return (
    <NewDiscWrapper>
      <ThemeHeader title='新碟上架' />
      <div className="album-list">
        <div className="list-inner">
          <AlbumsControl direction="left" onClick={() => carouselRef.current.prev()} />
          {/* 轮播图 */}
          <Carousel style={{ width: '645px' }} dots={false} ref={carouselRef}>
            {
              newAlbums && splitAlbums(5).map((outItem, index) => (
                <div key={index}>
                  <ul className="album-swiper-item">
                    {
                      outItem.map(innerItem => (
                        <li key={innerItem.id}>
                          <AlbumCover info={innerItem} />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </Carousel>
          <AlbumsControl direction="right" onClick={() => carouselRef.current.next()} />
        </div>
      </div>
    </NewDiscWrapper>
  )
})
