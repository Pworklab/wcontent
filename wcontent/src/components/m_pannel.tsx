import { useRouter, usePathname } from "next/navigation";

interface M_pannelProps {
  name: string;
  descript?: string;
}

export function M_pannel({ name, descript }: M_pannelProps) {
  const router = useRouter();

  const link = "monster/" + name;

  return (
    <div>
      <button onClick={() => router.push(link)}>
        <div className="pannel-screen bg-white relative">
          <div className="flex flex-col">
            <p className="text-black flex justify-center">{name}</p>
          </div>
        </div>
      </button>
    </div>
  );
}
// 詳細入れる要素を後で決める
export default M_pannel;
