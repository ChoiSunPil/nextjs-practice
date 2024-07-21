import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();
  // 모든 오리진에서의 요청을 허용
  res.headers.set('Access-Control-Allow-Origin', '*');
  // preflight 요청에 대응하기 위해 필요한 메소드를 허용
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  // 요청 헤더에서 허용할 헤더를 설정
  res.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Authorization');

  // OPTIONS 메소드에 대한 요청은 별도의 처리 없이 200 상태 코드로 응답
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: res.headers,
    });
  }

  return res;
}