type Props = {
  children: string;
  color: string;
};

/**
 * 数字タイルコンポーネント
 * @param children 内容
 * @param color タイルの色
 */

const NumberTile: React.VFC<Props> = ({ children, color }) => {
  let tileColor;
  if (color == "red") {
    tileColor = "bg-red-500";
  } else if (color == "blue") {
    tileColor = "bg-blue-500";
  } else if (color == "yellow") {
    tileColor = "bg-yellow-300";
  }
  return (
    <div className="flex bg-black border-2 border-white rounded w-12 h-16 justify-center items-center">
      <div
        className={`flex rounded-full w-10 h-10 justify-center items-center ${tileColor}`}
      >
        {children}
      </div>
    </div>
  );
};

export default NumberTile;
