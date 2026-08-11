import { useState, useEffect } from 'react';
import mockPosts from '../../mock/BlogPost/data.json';
import BlogPost from '../../components/BlogPost';
import './BlogPost.css';

interface Post {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
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
        style={{ width: '40%', height: '16px' }}
      ></div>
    </div>
  );
};

const BlogPosts = () => {
  const [posts, setPosts] = useState<readonly Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setPosts(mockPosts);
    // }, 100);

    // return () => clearTimeout(timer);

    // 실제 API 주소에서 데이터를 즉시 요청 (딜레이 코드 없음!)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        // 💡 획득한 데이터를 setTimeout으로 감싸서 로딩을 강제로 늦춥니다.
        const timer = setTimeout(() => {
          setPosts(data.slice(0, 5)); // 서버에서 데이터가 도착하는 순간 바로 화면에 그려짐
          setIsLoading(false); // ✅ 데이터 수집 완료되면 로딩 끄기
        }, 100);

        return () => clearTimeout(timer);
      })
      .catch((error) => {
        console.error('데이터 로딩 실패:', error);
        setIsLoading(false); // 에러가 나도 로딩은 꺼야 함
      });
  }, []);
  return (
    <>
      {/* 💡 삼항 연산자를 사용해 조건부 렌더링을 합니다. */}
      {isLoading ? (
        <>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonItem key={index} />
          ))}
        </>
      ) : (
        posts.map((post) => (
          <BlogPost
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))
      )}
    </>
  );
};

export default BlogPosts;
