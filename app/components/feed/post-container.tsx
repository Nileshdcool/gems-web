interface Props {
  key: string;
  children: React.ReactNode;
}

export const PostContainer: React.FC<Props> = ({ key, children }) => {
  return (
    <div className="flex hover:bg-gray-800" key={key}>
      <div className="w-4/5 px-4">
        <div className="show flex flex-row ">
          <div className="text-c-white">
            {children}
            <div className="mt-3 h-[1px] w-full bg-c-shadegray "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
