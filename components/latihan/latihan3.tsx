import { FlatList, Text, View } from "react-native";

export default function Latihan3() {
  return (
    <View>
      <Text>latihan 3</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

type ProductItemProps = { name: string };

const ProductItem = ({ name }: ProductItemProps) => (
  <View
    style={{
      margin: 10,
      padding: 15,
      backgroundColor: "blue",
      borderRadius: 15,
      alignItems: "center",
    }}
  >
    <Text style={{ color: "white", fontSize: 16 }}>{name}</Text>
  </View>
);

const products = [
  {
    id: 1,
    name: "product 1",
  },
  {
    id: 2,
    name: "product 2",
  },
  {
    id: 3,
    name: "product 3",
  },
  {
    id: 4,
    name: "product 4",
  },
  {
    id: 5,
    name: "product 5",
  },
  {
    id: 6,
    name: "product 6",
  },
  {
    id: 7,
    name: "product 7",
  },
  {
    id: 8,
    name: "product 8",
  },
  {
    id: 9,
    name: "product 9",
  },
  {
    id: 10,
    name: "product 10",
  },
  {
    id: 11,
    name: "product 11",
  },
  {
    id: 12,
    name: "product 12",
  },
  {
    id: 13,
    name: "product 13",
  },
  {
    id: 14,
    name: "product 14",
  },
  {
    id: 15,
    name: "product 15",
  },
  {
    id: 16,
    name: "product 16",
  },
  {
    id: 17,
    name: "product 17",
  },
  {
    id: 18,
    name: "product 18",
  },
];
