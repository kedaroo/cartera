import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// interface Props {
//     data: Array<WeeklyTransactions>
// }

const data = [
  {
    name: "Mon",
    amt: 2400,
  },
  {
    name: "Tue",
    amt: 2210,
  },
  {
    name: "Wed",
    amt: 2290,
  },
  {
    name: "Thu",
    amt: 2000,
  },
  {
    name: "Fri",
    amt: 2181,
  },
  {
    name: "Sat",
    amt: 2500,
  },
  {
    name: "Sun",
    amt: 2100,
  },
];

export default function BarCHart() {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data} barSize={15}>
        <CartesianGrid strokeDasharray="4" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="amt" fill="#2484e7" />
      </BarChart>
    </ResponsiveContainer>
  );
}
