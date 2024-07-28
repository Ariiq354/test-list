import TableRender from "./TableRender";
import { List } from "./types";

const getList = async (country: string, name: string) => {
  const res = await fetch(
    `http://universities.hipolabs.com/search?country=${country}&name=${name}`
  );
  return res.json() as Promise<List[]>;
};

export default async function page() {
  const data = await getList("indonesia", "universitas");

  const search = async (name: string, country: string) => {
    "use server";
    const data = await getList(country, name);
    return data;
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen ">
      <div className="container p-4">
        <TableRender data={data} search={search} />
      </div>
    </div>
  );
}
