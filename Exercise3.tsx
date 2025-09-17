import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Exercise3() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto Profil */}
      <Image 
        style={styles.img} 
        source={require('./img/PittNewsSpongebob.jpg')}
      />

      {/* Nama & Jabatan */}
      <Text style={styles.name}>Claire Trifena Priscilla Kaseger</Text>
      <Text style={styles.role}>Backend Developer and Software Developer</Text>

      {/* Tentang Saya */}
      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.text}>
        Saya seorang Backend Developer dan Software Developer dengan pengalaman 
        membangun sistem berbasis local server maupun cloud. Terbiasa melakukan 
        konfigurasi server, database, dan deployment mandiri, serta mengintegrasikan 
        layanan cloud untuk skalabilitas. Saya juga memanfaatkan Cloudflare (cloudflared) 
        untuk meningkatkan keamanan, performa, dan konektivitas. Fokus pada pengembangan 
        solusi teknologi yang stabil, efisien, dan siap digunakan di production.
      </Text>

      {/* Skills */}
      <Text style={styles.sectionTitle}>My Skills</Text>
      <View style={styles.skillBox}>
        <Text style={styles.skill}>🔹 Backend Development (Java, Spring Boot, Node.js)</Text>
        <Text style={styles.skill}>🔹 Database Management (MySQL, PostgreSQL, MongoDB)</Text>
        <Text style={styles.skill}>🔹 Local Server Setup & Administration (Linux, Nginx, Apache, Docker)</Text>
        <Text style={styles.skill}>🔹 Cloud Integration (Cloudflare, cloudflared, API Gateway, Hosting)</Text>
        <Text style={styles.skill}>🔹 Mobile Development (React Native)</Text>
        <Text style={styles.skill}>🔹 IoT & AI Integration</Text>
      </View>

      {/* Project Highlight */}
      <Text style={styles.sectionTitle}>Projects</Text>
      <View style={styles.projectBox}>
        <Text style={styles.project}>🔹 Face Recognition System (Java + Python Hybrid)</Text>
        <Text style={styles.project}>🔹 IoT Smart Hydroponics Monitoring</Text>
        <Text style={styles.project}>🔹 Mobile App for Portfolio Showcase (React Native)</Text>
      </View>

      {/* Contact */}
      <Text style={styles.sectionTitle}>Contact</Text>
      <Text style={styles.contact}>📧 quiland86@gmail.com</Text>
      <Text style={styles.contact}>💻 github.com/quiland15</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa', // Light gray background for a modern, clean look
    alignItems: 'center',
    borderRadius: 90,
    padding: 24,
    paddingBottom: 40, // Extra padding at the bottom for better scrolling
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 90, // Perfect circle
    borderWidth: 2,
    borderColor: '#2c3e50', // Darker, professional border color
    marginBottom: 20,
    shadowColor: '#000', // Subtle shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // For Android shadow
  },
  name: {
    fontSize: 28, // Slightly larger for prominence
    fontWeight: '700',
    color: '#2c3e50', // Darker color for better contrast
    marginTop: 10,
    letterSpacing: 0.5, // Subtle spacing for readability
  },
  role: {
    fontSize: 16,
    color: '#7f8c8d', // Muted gray for secondary text
    marginBottom: 24,
    textAlign: 'center',
    fontStyle: 'italic', // Slight italic for a refined touch
    lineHeight: 22, // Improved readability
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#34495e', // Professional dark blue-gray
    marginTop: 24,
    marginBottom: 12,
    alignSelf: 'flex-start',
    borderBottomWidth: 2, // Underline for emphasis
    borderBottomColor: '#3498db', // Accent color for vibrancy
    paddingBottom: 4,
  },
  text: {
    fontSize: 15,
    color: '#2c3e50', // Consistent dark color for text
    textAlign: 'justify',
    lineHeight: 24, // Better line spacing for readability
    paddingHorizontal: 4, // Slight padding for alignment
  },
  skillBox: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff', // White background for card-like effect
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000', // Subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android
  },
  skill: {
    fontSize: 15,
    color: '#2c3e50',
    marginBottom: 8,
    lineHeight: 22,
  },
  projectBox: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff', // Consistent card-like effect
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  project: {
    fontSize: 15,
    color: '#2c3e50',
    marginBottom: 10,
    lineHeight: 22,
  },
  contact: {
    fontSize: 15,
    color: '#3498db', // Blue accent for clickable vibe
    marginBottom: 8,
    lineHeight: 22,
  },
});