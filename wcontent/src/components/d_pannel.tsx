interface D_pannelProps {
  name: string;
  descript?: string;
}

function numToStar(num) {
  if (num < 0 || num > 5) {
    return "☆☆☆☆☆";
  }
  const filledStars = "★★★★★".slice(0, num);
  const emptyStars = "☆☆☆☆☆".slice(num);
  return filledStars + emptyStars;
}

export function D_pannel() {
  return (
    <div>
      <div className="pannel-screen bg-white relative">
        <div className="flex flex-col">
          <p className="text-black flex justify-center">Monster Name</p>
        </div>
      </div>
    </div>
  );
}
// 詳細入れる要素を後で決める
export default D_pannel;
