import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import './Photo.css';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 2rem;
`;
const PhotoCard = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  width: 20rem;
  /* 📱 모바일 환경 (768px 이하) */
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const PhotoImg = styled.img`
  width: 100%;
  border-radius: 0.4rem;
  @media (max-width: 768px) {
    height: 10rem;
    display: inline-block;
  }
`;

interface Photo {
  readonly albumId: number;
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly thumbnailUrl: string;
}

const SkeletonItem = () => {
  return (
    <div className='skeleton-card'>
      <div
        className='skeleton-loading'
        style={{ width: '60%', height: '24px', marginBottom: '10px' }}
      ></div>
      <div
        className='skeleton-loading'
        style={{ width: '90%', height: '16px', marginBottom: '6px' }}
      ></div>
      <div
        className='skeleton-loading'
        style={{ width: '100%', height: '10rem' }}
      ></div>
    </div>
  );
};

// async, await을 사용한 코드 단순화
async function fetchPhotos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  if (!response.ok) {
    throw new Error('Error occurs');
  }
  const parseData = await response.json();
  const transformedPhotos = parseData.slice(0, 14);
  return transformedPhotos;
}

const Photo = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/photos')
  //       .then((response) => response.json())
  //       .then((data) => setPhotos(data.slice(0, 10)))
  //       .catch((error) => console.log(error));
  //   }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPhotos().then((response) => setPhotos(response));
      setIsLoading(false); // ✅ 데이터 수집 완료되면 로딩 끄기
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonItem key={index} />
          ))}
        </>
      ) : (
        photos.map((photo) => (
          <PhotoCard key={photo.id}>
            <Title>{photo.title}</Title>
            <PhotoImg src={photo.thumbnailUrl} alt={photo.title} />
          </PhotoCard>
        ))
      )}
    </Container>
  );
};

export default Photo;
