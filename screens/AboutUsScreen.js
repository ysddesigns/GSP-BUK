import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

const AboutUsScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open link:", err)
    );
  };

  const developers = [
    {
      name: "Yusuff Smart",
      role: "Lead Developer",
      bio: "John is an experienced developer with a passion for creating innovative mobile applications. He specializes in React Native and enjoys solving complex problems.",
      image: require("../assets/smarty.png"),
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      name: "Yusuff Smart",
      role: "UI/UX Designer",
      bio: "Jane specializes in user interface design and has a keen eye for aesthetics and user experience. She enjoys creating intuitive and visually appealing designs.",
      image: require("../assets/smart1.png"),
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://www.linkedin.com/in/yusuff_smart",
    },
    // Add more developers as needed
  ];

  const sponsor = {
    name: "Ysmart 4 SUG BUK",
    description:
      "Ysmart 4 SUG BUK 2024 is a leading technology company that provides innovative solutions for businesses worldwide. They are committed to supporting emerging developers and fostering innovation in the tech industry.",
    logo: require("../assets/icon.png"),
    website: "https://www.ysddesigns.com",
    twitter: "https://twitter.com/yusuf_smart1",
    linkedin: "https://www.linkedin.com/company/yusuff_smart",
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Our Team</Text>
        {developers.map((developer, index) => (
          <View key={index} style={styles.member}>
            <Image source={developer.image} style={styles.image} />
            <Text style={styles.memberName}>{developer.name}</Text>
            <Text style={styles.memberRole}>{developer.role}</Text>
            <Text style={styles.memberBio}>{developer.bio}</Text>
            <View style={styles.socialLinks}>
              <TouchableOpacity onPress={() => openLink(developer.twitter)}>
                <Image
                  source={require("../assets/twitter.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink(developer.linkedin)}>
                <Image
                  source={require("../assets/linkedin.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
              {/* Add more social handles as needed */}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Sponsorship</Text>
        <View style={styles.sponsorContainer}>
          <Image source={sponsor.logo} style={styles.sponsorLogo} />
          <Text style={styles.sponsorName}>{sponsor.name}</Text>
          <Text style={styles.sponsorDescription}>{sponsor.description}</Text>
          <View style={styles.sponsorSocialLinks}>
            <TouchableOpacity onPress={() => openLink(sponsor.website)}>
              <Text style={styles.sponsorLink}>Website</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(sponsor.twitter)}>
              <Text style={styles.sponsorLink}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(sponsor.linkedin)}>
              <Text style={styles.sponsorLink}>LinkedIn</Text>
            </TouchableOpacity>
            {/* Add more social handles as needed */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  section: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333333",
  },
  member: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
  },
  memberRole: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666666",
  },
  memberBio: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  sponsorContainer: {
    alignItems: "center",
  },
  sponsorLogo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  sponsorName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
  },
  sponsorDescription: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 10,
  },
  sponsorSocialLinks: {
    flexDirection: "row",
    justifyContent: "center",
  },
  sponsorLink: {
    fontSize: 16,
    color: "#007bff", // Blue color for links
    marginHorizontal: 10,
  },
});

export default AboutUsScreen;
