type Props = {
  children: string;
  color: string;
};

/**
 * 数字カードコンポーネント
 * @param children 内容
 * @param color カードの色
 */

const NumberTile: React.VFC<Props> = ({ children, color }) => {
  let cardColor;
  if (color == "red") {
    cardColor = "bg-red-500";
  } else if (color == "blue") {
    cardColor = "bg-blue-500";
  } else if (color == "yellow") {
    cardColor = "bg-yellow-300";
  }
  return (
    <div className="flex bg-black border-2 border-white rounded w-12 h-14 justify-center items-center">
      <div
        className={`flex rounded-full w-10 h-10 justify-center items-center ${cardColor}`}
      >
        {children}
      </div>
    </div>
  );
};

export default NumberTile;
