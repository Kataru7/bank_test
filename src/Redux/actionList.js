export default function fetchDataList(data) {
  return {
    type: "CREATE_DATA_LIST",
    payload: data,
  };
}
