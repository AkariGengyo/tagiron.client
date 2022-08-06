type Props = {
  children: string;
};

/**
 * チャットテキストコンポーネント
 * @param children 内容
 */

const ChatText: React.VFC<Props> = ({ children }) => {
  return (
    <div className="w-fit max-w-xs bg-gray-200 p-3 rounded-md">{children}</div>
  );
};

export default ChatText;
