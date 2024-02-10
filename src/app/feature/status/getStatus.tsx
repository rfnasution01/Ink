import { PrismaClient } from "@prisma/client";
import { DeleteStatus, UpdateStatus } from ".";
const prisma = new PrismaClient();

export async function GetStatus() {
  const getStatus = async () => {
    const res = await prisma.status.findMany({
      select: {
        id: true,
        name: true,
        icon: true,
      },
    });
    return res;
  };

  const status = await getStatus();

  return (
    <div className="">
      {status.map((item, idx) => (
        <div key={idx} className="flex">
          <h5>{item?.name}</h5>
          <h5>{item?.id}</h5>
          <h5>{item?.icon}</h5>
          <DeleteStatus id={item?.id} />
          <UpdateStatus id={item?.id} />
        </div>
      ))}
    </div>
  );
}
