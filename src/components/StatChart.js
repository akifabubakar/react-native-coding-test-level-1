import { View } from "react-native";
import { BarChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";

export default function StatChart(props) {
  const { data } = props;

  const CUT_OFF = 20;
  const Labels = ({ x, y, bandwidth, data }) =>
    data.map(({ value, label }, index) => (
      <>
        <Text
          key={`value-${index}`}
          x={x(index) + bandwidth / 2}
          y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
          fontSize={14}
          fill={value >= CUT_OFF ? "white" : "black"}
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {value}
        </Text>
        <Text
          key={`label-${index}`}
          x={x(index) + bandwidth / 2}
          y={value < CUT_OFF ? y(value) - 30 : y(value) + 35}
          fontSize={14}
          fill="black"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {label}
        </Text>
      </>
    ));

  return (
    <BarChart
      style={{ flex: 1, height: 200 }}
      data={data}
      yAccessor={({ item }) => item.value}
      svg={{ fill: "cornflowerblue" }}
      contentInset={{ top: 10, bottom: 10 }}
      gridMin={0}
    >
      <Labels />
    </BarChart>
  );
}
