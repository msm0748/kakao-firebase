import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <div>
        <Link
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}/oauth/kakao&response_type=code`}
        >
          <a>카카오 로그인</a>
        </Link>
      </div>
      <div>
        <Link
          href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=test&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}/oauth/naver`}
        >
          <a>네이버 로그인</a>
        </Link>
      </div>
    </>
  );
}
