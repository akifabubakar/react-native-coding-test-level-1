import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import PropTypes from "prop-types";

export default function ColumnList(props) {
  const {
    data,
    column,
    renderItem,
    initialNumToRender,
    onEndReached,
    listFooterComponent,
  } = props;

  const [listData, setListData] = useState(data);

  useEffect(() => {
    if (data.length > 0) {
      // fill in the remaining empty column with empty objects / null
      const remain = data.length % column;
      const newData = data;

      if (remain > 0) {
        for (let index = 0; index < column - remain; index++) {
          newData.push({});
        }
      }

      setListData(newData);
    }
  }, [data]);

  return (
    <FlatList
      style={{ width: "100%" }}
      data={listData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
      numColumns={column}
      initialNumToRender={initialNumToRender}
      horizontal={false}
      onEndReached={onEndReached}
      ListFooterComponent={listFooterComponent}
    />
  );
}

ColumnList.defaultProps = {
  renderItem: () => {},
  data: [],
  column: 2,
  initialNumToRender: 10,
  onEndReached: () => {},
  listFooterComponent: null,
};

ColumnList.propTypes = {
  renderItem: PropTypes.func,
  data: PropTypes.array,
  column: PropTypes.number,
  initialNumToRender: PropTypes.number,
  onEndReached: PropTypes.func,
  listFooterComponent: PropTypes.elementType,
};
