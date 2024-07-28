"use client";

import { Button, Input, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { List } from "./types";

const columns: TableColumnsType = [
  {
    title: "Code",
    dataIndex: "alpha_two_code",
    key: "alpha_two_code",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Domains",
    dataIndex: "domains",
    key: "domains",
    render: (domains: string[]) => domains.join(", "),
  },
  {
    title: "State Province",
    dataIndex: "state-province",
    key: "state-province",
    render: (value) => {
      if (value) {
        return value;
      } else {
        return "None";
      }
    },
  },
];

export default function TableRender({
  data,
  search,
}: {
  data: List[];
  search: (name: string, country: string) => Promise<List[]>;
}) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<List[]>(data);
  const [name, setName] = useState("Universitas");
  const [country, setCountry] = useState("Indonesia");

  async function handleClick() {
    setLoading(true);
    setResult(await search(name, country));
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-2xl text-black font-bold">
        University Domain List
      </h1>
      <div className="flex gap-4 md:flex-row flex-col">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button onClick={handleClick} loading={loading}>
          Search
        </Button>
      </div>
      <Table
        dataSource={result}
        columns={columns}
        bordered={true}
        rowKey="name"
      />
    </div>
  );
}
