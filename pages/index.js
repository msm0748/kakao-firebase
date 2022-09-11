import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  return (
    <div>
      <Link
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}/oauth/kakao&response_type=code`}
      >
        <a>카카오 로그인</a>
      </Link>
    </div>
  );
}
