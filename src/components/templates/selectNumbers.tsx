import Button from "~/components/parts/button";
import Modal from "../parts/modal";
import NumberTile from "../parts/numberTile";

type Props = {
  isOpen: boolean;
};

/**
 * モーダルコンポーネント
 * @param isOpen モーダルを表示する場合:true
 */

const SelectNumbers: React.VFC<Props> = ({ isOpen }) => {
  const cardNumArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const numberTiles = cardNumArr.map(function (value) {
    if (value == "5") {
      return <NumberTile color="yellow">{value}</NumberTile>;
    } else {
      return (
        <div>
          <NumberTile color="red">{value}</NumberTile>
          <NumberTile color="blue">{value}</NumberTile>
        </div>
      );
    }
  });
  return (
    <Modal isOpen={isOpen}>
      <div>
        <div className="flex justify-center items-center mb-5">
          <button className="h-12 w-10 border-2 border-gray-500 mx-2"></button>
          <button className="h-12 w-10 border-2 border-gray-500 mx-2"></button>
          <button className="h-12 w-10 border-2 border-gray-500 mx-2"></button>
          <button className="h-12 w-10 border-2 border-gray-500 mx-2"></button>
          <button className="h-12 w-10 border-2 border-gray-500 mx-2"></button>
        </div>
        <div className="flex justify-center items-center">{numberTiles}</div>
        <div className="flex justify-center items-center">
          <Button className="m-5">宣言する</Button>
          <Button className="m-5">戻る</Button>
        </div>
      </div>
    </Modal>
  );
};

export default SelectNumbers;
