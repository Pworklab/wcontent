
interface M_pannelProps
{
    name: string,
    descript?: string;
}

export function M_pannel()
{return(
<div>
    <div className="size-40 bg-white relative">
        <div className="flex flex-col">
        <p className="text-black flex justify-center">Monster Name</p>
        </div>
    </div>
</div>
);}

// 詳細入れる要素を後で決める
export default M_pannel;