'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function ReservePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [courses, setCourses] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from('courses').select('id, name');
      if (error) {
        console.error('Error fetching courses:', error);
      } else if (data) {
        setCourses(data);
        if (data.length > 0) {
          setCourseId(data[0].id);
        }
      }
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from('reservations').insert([
      {
        name,
        email,
        course_id: courseId, // uuid文字列をそのまま入れる
        date,
        time,
        paid: false, // 新規は未払い
      },
    ]);

    if (error) {
      console.error(error);
      alert('予約に失敗しました: ' + error.message);
    } else {
      alert('予約が完了しました！');
      // フォームリセット
      setName('');
      setEmail('');
      setCourseId(courses.length > 0 ? courses[0].id : '');
      setDate('');
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="メール"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <select
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        className="border p-2 rounded"
        required
      >
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        予約する
      </button>
    </form>
  );
}
