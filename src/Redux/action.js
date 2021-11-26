export default function fetchData(data) {
  return {
    type: "CREATE_DATA",
    payload: data,
  };
}
