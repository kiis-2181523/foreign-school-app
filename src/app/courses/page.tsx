import Link from 'next/link';
export default function Courses() {
  // 仮のコース一覧（あとでSupabaseのデータに置き換える）
  const courses = [
    { id: 1, name: '英会話 初級コース', description: '日常英会話を基礎から学びます' },
    { id: 2, name: 'フランス語 入門コース', description: 'フランス語の基本文法と発音' },
    { id: 3, name: '中国語 会話コース', description: '旅行やビジネスで使えるフレーズ' },
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">コース一覧</h1>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p className="text-gray-600">{course.description}</p>
            <Link
              href="/reserve"
              className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              予約する
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
