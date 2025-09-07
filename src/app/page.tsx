import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">ホームページ</h1>
      <Link href="/courses">
        <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
          コース一覧ページ
        </button>
      </Link>
      <Link href="/reserve">
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          予約フォームページ
        </button>
      </Link>
    </main>
  );
}
