import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>aplikasi data diri saya</Text>
      <TextInput placeholder="nama lengkap" style={{ borderWidth: 1, width: "80%", marginVertical: 10, borderRadius: 12, padding: 18 }} />
      <TextInput placeholder="email" style={{ borderWidth: 1, width: "80%", marginVertical: 10, borderRadius: 12, padding: 18 }} />
      <TextInput placeholder="alamat" style={{ borderWidth: 1, width: "80%", marginVertical: 10, borderRadius: 12, padding: 18 }} />
    </View>
  );
}
