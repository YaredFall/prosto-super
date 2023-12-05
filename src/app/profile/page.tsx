import LogInForm from "@/components/LogInForm";
import { Button } from "@/components/ui/button";
import { removeUser } from "@/server-actions/user";
import { USER_COOKIE_KEY } from "@/utils/misc";
import { cookies } from 'next/headers';
import Image from 'next/image';

type Props = {};

export default function page({ }: Props) {
  const userCookie = cookies().get(USER_COOKIE_KEY)?.value;
  const user = JSON.parse(userCookie || "null");

  return (
    <main className="px-2main-layout mt-8 mb-16 h-full">
      <div className="flex justify-between gap-16 flex-wrap">
        {user ?
          <>
            <div className="flex-[2]">
              <h1 className={"text-6xl font-bold"}>Личный кабинет</h1>
              <p className={"text-xl my-8"}>Добро пожаловать, <span className="font-semibold whitespace-nowrap">{user.phone}</span>!</p>
              <p className={"text-xl my-8"}>Отсканируйте QR-код, чтобы воспользоваться виртуальной картой лояльности</p>
              <form action={removeUser}>
                <Button >Выйти</Button>
              </form>
            </div>
            <div className="flex-[1] flex items-center justify-center">
              <div className='rounded-xl h-40 w-40 aspect-square relative overflow-hidden outline-8 outline outline-red-400'>
                <Image src={"https://chart.googleapis.com/chart?cht=qr&chl=%D0%A1%D1%83%D0%BF%D0%B5%D1%80%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20%E2%84%96000000&chs=180x180&choe=UTF-8&chld=L|2"}
                  fill
                  alt='QR'
                />
              </div>
            </div>
          </>
          :
          <>
            <div className="flex-[2]">
              <h1 className={"text-6xl font-bold"}>Личный кабинет</h1>
              <p className={"text-xl my-8"}>Войдите, чтобы получить доступ к виртуальной карте лояльности</p>
            </div>
            <LogInForm className="flex-[1] py-4" />
          </>
        }
      </div>
    </main>
  );
}