type Props = {
  children: string;
  className?: string;
};

/**
 * チャットテキストコンポーネント
 * @param children 内容
 */

const ChatMessage: React.VFC<Props> = ({ children, className }) => {
  return (
    <div className={`w-fit rounded-md bg-gray-200 p-3 text-sm ${className}`}>
      {children}
    </div>
  );
};

export default ChatMessage;
