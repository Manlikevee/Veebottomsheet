import { Drawer } from "expo-router/drawer";
import { Image, View, Text } from "react-native";
import icons from "../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList } from "@react-navigation/drawer"

export default function Layout() {
  return (
    <Drawer
       screenOptions={{
        drawerStyle: {
          backgroundColor: "#FFF",
          width: 250
        },

        headerStyle: {
          backgroundColor: "#f4511e"
        },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        drawerLabelStyle: {
          color: "#111"
        }
       }}

      //  For custom content
       drawerContent={
        (props)=>{
          return (
            <SafeAreaView>
               <View style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#f4f4f4",
                borderBottomWidth: 1,
                paddingBottom: 12
               }}>
                 <Image
                   source={require("../assets/avatar.jpg")}
                   resizeMode="contain"
                   style={{
                    height: 120,
                    width: 120,
                    borderRadius: 999
                   }}
                 />

                 <Text  style={{
                  fontSize: 22,
                  marginVertical: 6,
                  fontWeight: "bold",
                  color: "#111"
                 }}>Isabella Joanna</Text>

                 <Text style={{
                  fontSize: 16,
                  color: "#111"
                 }}>Mobile Developer</Text>
               </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          )
        }
       }
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="wallet"
        options={{
          drawerLabel: "Wallet Balance",
          title: "Wallet Balance",
          drawerIcon: () => (
            <Image
              source={icons.wallet}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="myearnings"
        options={{
          drawerLabel: "My Earnings",
          title: "My Earnings",
          drawerIcon: () => (
            <Image
              source={icons.dollar}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="history"
        options={{
          drawerLabel: "Shared History",
          title: "Shared History",
          drawerIcon: () => (
            <Image
              source={icons.share}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="wishlist"
        options={{
          drawerLabel: "Wishlist",
          title: "Wishlist",
          drawerIcon: () => (
            <Image
              source={icons.heart}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />

      <Drawer.Screen
        name="bankdetails"
        options={{
          drawerLabel: "Bank Details",
          title: "Bank Details",
          drawerIcon: () => (
            <Image
              source={icons.bank}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="referal"
        options={{
          drawerLabel: "Refer & Earn",
          title: "Refer & Earn",
          drawerIcon: () => (
            <Image
              source={icons.refer}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />

      <Drawer.Screen
        name="businessdetails"
        options={{
          drawerLabel: "Business Details",
          title: "Business Details",
          drawerIcon: () => (
            <Image
              source={icons.work}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="callsupport"
        options={{
          drawerLabel: "Call Support",
          title: "Call Support",
          drawerIcon: () => (
            <Image
              source={icons.headphone}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />

      <Drawer.Screen
        name="rateus"
        options={{
          drawerLabel: "Rate Us",
          title: "Rate Us",
          drawerIcon: () => (
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />

      <Drawer.Screen
        name="logout"
        options={{
          drawerLabel: "Logout",
          title: "Logout",
          drawerIcon: () => (
            <Image
              source={icons.logout}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: "#000000"
              }}
            />
          )
        }}
      />
    </Drawer>
  )
}