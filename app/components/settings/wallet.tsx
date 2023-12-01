import phantom from "~/assets/images/sample/phantomwallet.png";
import { IconEdit, IconXRed } from "~/assets/Icons";
import { ChangeWalletName, Unlink } from "./modal";
import { useState } from "react";

export default function Wallet() {
  const [unlink, setUnlink] = useState(false);
  const [editwallet, setEditwallet] = useState(false);
  return (
    <div>
      <table className="w-full  mt-4">
        <thead className=" text-c-gray">
          <tr className="border">
            <th className="text-center border px-3 py-2">Name</th>
            <th className="text-center border px-3 py-2">Address</th>
            <th className="text-center border px-3 py-2">Network</th>
            <th className="text-center border px-3 py-2">Unlink</th>
          </tr>
        </thead>
        <tbody className="text-c-lightgray">
          <tr className="border">
            <td className=" flex justify-center">
              <div className="mt-2 ">
                <h1>
                  Wallet{" "}
                  <button className="ml-2" onClick={() => setEditwallet(true)}>
                    <IconEdit />
                  </button>
                </h1>
              </div>
            </td>
            <td className=" text-center border">3FZbg........ktZc5</td>
            <td className="text-center border">
              <div className="flex justify-center items-center">
                <img src={phantom} alt="" />{" "}
                <p className=" ml-1 py-2 flex flex-col">
                  Mainnet Beta{" "}
                  <span className="text-xs text-c-gray ml-1">
                    Phantom RPC Network
                  </span>
                </p>
              </div>
            </td>
            <td className="text-center border">
              <div className="flex justify-center">
                <button
                  className="flex justify-center"
                  onClick={() => setUnlink(true)}
                >
                  <IconXRed />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border">
            <td className=" flex justify-center">
              <div className="mt-2 ">
                <h1>
                  Wallet{" "}
                  <button className="ml-2">
                    <IconEdit />
                  </button>
                </h1>
              </div>
            </td>
            <td className=" text-center border">3FZbg........ktZc5</td>
            <td className="text-center border">
              <div className="flex justify-center items-center">
                <img src={phantom} alt="" />{" "}
                <p className=" ml-1 py-2 flex flex-col">
                  Mainnet Beta{" "}
                  <span className="text-xs text-c-gray ml-1">
                    Phantom RPC Network
                  </span>
                </p>
              </div>
            </td>
            <td className="text-center border">
              <div className="flex justify-center">
                <IconXRed />
              </div>
            </td>
          </tr>
          <tr className="border">
            <td className=" flex justify-center">
              <div className="mt-2 ">
                <h1>
                  Wallet{" "}
                  <button className="ml-2">
                    <IconEdit />
                  </button>
                </h1>
              </div>
            </td>
            <td className=" text-center border">3FZbg........ktZc5</td>
            <td className="text-center border">
              <div className="flex justify-center items-center py-2">
                <img src={phantom} alt="" />{" "}
                <p className=" ml-1  flex flex-col">
                  Mainnet Beta{" "}
                  <span className="text-xs text-c-gray ml-1">
                    Phantom RPC Network
                  </span>
                </p>
              </div>
            </td>
            <td className="text-center border">
              <div className="flex justify-center">
                <IconXRed />
              </div>
            </td>
          </tr>
          <tr className="border">
            <td className=" flex justify-center">
              <div className="mt-2 ">
                <h1>
                  Wallet{" "}
                  <button className="ml-2">
                    <IconEdit />
                  </button>
                </h1>
              </div>
            </td>
            <td className=" text-center border">3FZbg........ktZc5</td>
            <td className="text-center border">
              <div className="flex justify-center items-center">
                <img src={phantom} alt="" />{" "}
                <p className=" ml-1 py-2 flex flex-col">
                  Mainnet Beta{" "}
                  <span className="text-xs text-c-gray ml-1">
                    Phantom RPC Network
                  </span>
                </p>
              </div>
            </td>
            <td className="text-center border">
              <div className="flex justify-center">
                <IconXRed />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {unlink && <Unlink close={() => setUnlink(false)} />}
      {editwallet && <ChangeWalletName close={() => setEditwallet(false)} />}
    </div>
  );
}
