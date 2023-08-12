export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconet"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{`상품${a} $40`}</h4>
          </div>
        );
      })}
    </div>
  );
}

// 성능과 속도가 중요하다면 이미지 넣을 때 <Image /> 태그를 씁시다.
// 그럼 자동으로 이미지 lazy loading & 사이즈 최적화 & layout shift 방지를 해줍니다.

//다른 사이트에 올려둔 이미지를 <Image>에 절대경로로 집어넣고 싶으면
// width, height 옵션을 집어넣어야합니다.

/**
 * 2) 위처럼 내 사이트 말고 다른 URL에서 가져오고 싶으면 하단 링크처럼 셋팅도 해놔야합니다. 

https://beta.nextjs.org/docs/optimizing/images#remote-images
 */
