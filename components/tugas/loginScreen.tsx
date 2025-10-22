import { Button, Text, TextInput, View } from "react-native";


export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: "white",
          marginBottom: 24,
          fontWeight: "bold",
        }}
      >
        aplikasi data diri saya
      </Text>

      <View style={{ width: "100%", paddingHorizontal: 40, backgroundColor: "white", borderRadius: 12, paddingVertical: 20 }}>
        <Text style={{ }}>email:</Text>
        <TextInput
          placeholder="johndoe@example.com"
          style={{
            borderWidth: 1,
            width: "100%",
            marginVertical: 10,
            borderRadius: 10,
            padding: 8,
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        <Text style={{ }}>password:</Text>
        <TextInput
          placeholder="password"
          style={{
            borderWidth: 1,
            width: "100%",
            marginVertical: 10,
            borderRadius: 10,
            padding: 8,
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <Button title="login" onPress={() => {}} />

      </View>
    </View>
  )
}
