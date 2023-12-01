import { useEffect } from "react";
import Nos2xLogin from "./nos2x-login";
import { useNavigation } from "@remix-run/react";
import AlbyLogin from "./alby-login";
import { IconCircleX } from "public/assets/icons";
type LoginOptionsProps = {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  onClose: () => void; // New prop for handling close
};

export default function LoginOptions({
  setProgress,
  onClose, // New prop
}: LoginOptionsProps): JSX.Element {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.state == "idle"
      ? setProgress(0)
      : navigation.state == "submitting"
      ? setProgress(50)
      : navigation.state == "loading"
      ? setProgress(100)
      : setProgress(0);
  }, [navigation.state, setProgress]);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="h-[280px] w-[400px] rounded-lg bg-c-gray px-3 py-5 font-Roboto text-xl text-c-lightgray">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-c-lightgray hover:text-c-white focus:outline-none"
          >
            <IconCircleX />
          </button>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center font-Bebas text-4xl">
            Choose keychain{" "}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <Nos2xLogin navigation={navigation} />
        </div>
        <div className="mt-3 flex items-center justify-center">
          <AlbyLogin navigation={navigation} />
        </div>
      </div>
    </div>
  );
}
