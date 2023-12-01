import React from "react";
import { Button } from "../common/button";
import { PostButtonLoader } from "../loader";

interface FeedBtnLoaderProps {
  buttonText: string | JSX.Element;
  module: string;
  onClick: (module: string) => void;
}

const FeedBtnLoader: React.FC<FeedBtnLoaderProps> = ({
  buttonText,
  module,
  onClick,
}) => {
  return (
    <div className="flex justify-center">
      <Button
        size="medium"
        className="mt-2 w-[400px] font-Bebas text-2xl"
        onClick={() => onClick(module)}
      >
        {buttonText != "LOADING" ? (
            buttonText        
        ) : (
          <div className="flex items-center justify-center">
            {buttonText}           
              <PostButtonLoader />          
          </div>
        )}
      </Button>
    </div>
  );
};

export default FeedBtnLoader;
