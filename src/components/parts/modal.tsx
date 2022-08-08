type Props = {
  children: any;
  isOpen: boolean;
};

/**
 * モーダルコンポーネント
 * @param children 内容
 * @param isOpen モーダルを表示する場合:true
 */

const Modal: React.VFC<Props> = ({ children, isOpen }) => {
  if (isOpen) {
    return (
      <div className="flex fixed bg-black bg-opacity-50 w-[100%] h-[100%] top-0 left-0 justify-center items-center">
        <div className="bg-white w-[50%] z-20 p-10">{children}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
