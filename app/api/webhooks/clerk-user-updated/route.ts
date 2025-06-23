import { db } from '@/lib/db';

export async function POST(req: Request) {
  const body = await req.json();
  const data = body.data;

  // Güvenli erişim ve fallback'ler
  const userId = data?.id;
  const username = data?.username;
  const firstName = data?.first_name;
  const lastName = data?.last_name;
  const imageUrl = data?.image_url || data?.profile_image_url;

  // İsim mantığı
  let displayName = username || ((firstName || '') + ' ' + (lastName || '')).trim();

  // Eğer userId yoksa hata döndür
  if (!userId) {
    return new Response(JSON.stringify({ error: 'userId bulunamadı' }), { status: 400 });
  }

  await db.profile.update({
    where: { userId },
    data: { 
      name: displayName,
      ...(imageUrl && { imageUrl })
    }
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}