import {ScrollView, StyleSheet, View, Text,Linking } from "react-native";
import { Paragraph ,Card, Title } from 'react-native-paper';
export default function Contact() {
    return (
        <ScrollView
        style={{
            paddingVertical: 20,
            backgroundColor:"#ffffff"
        }}>
                <Card style={{
                    paddingVertical: 20,
                    backgroundColor:"#ffffff"
                }}>
                    <Card.Content>
                        <Title style={{
                            fontSize: 18,
                            color: "#336ab5",
                            fontWeight: 'bold',
                            textAlign:"center"
                        }}>
                            Contact Us
                        </Title>
                        <Paragraph>Our experts are on call 24/7/365 to assist with all of your technical cleaning needs from crime scene cleanup to professional blood cleanup, biohazard cleanup, and more.</Paragraph>
                        <Title style={{
                            fontSize: 15,
                            color: "#336ab5",
                            fontWeight: 'bold',
                        }}>
                            Email
                        </Title>
                        <Paragraph onPress={() => Linking.openURL('info@valortechnicalcleaning.com')}>info@valortechnicalcleaning.com</Paragraph>
                        <Title style={{
                            fontSize: 15,
                            color: "#336ab5",
                            fontWeight: 'bold',
                        }}>
                            Call Us
                        </Title>
                        <Paragraph onPress={() => Linking.openURL('tel:(303) 529-4894')}>(303) 529-4894</Paragraph>
                        <Title style={{
                            fontSize: 15,
                            color: "#336ab5",
                            fontWeight: 'bold',
                        }}>
                            Buisness Hours
                        </Title>
                        <Paragraph>Open 24 hours</Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
    );
}
