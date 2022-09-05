import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Title } from 'react-native-paper';

import { WebView } from 'react-native-webview';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {
    return (
        <>
            <ScrollView>
                <Card style={{
                    paddingVertical: 20,
                }}>
                    <Card.Cover style={{
                            width: 200, 
                            height: 70, 
                            backgroundColor: "transparent", 
                            alignSelf: "center",
                        }}
                        source={require('./../../assets/images/flag.png')} />
                    <Card.Content>
                        <Title style={{
                            fontSize: 18,
                            color: "#336ab5",
                            fontWeight: 'bold',
                            alignSelf: "center",
                        }}>
                            855.476.491
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#336ab5",
                                    fontWeight: 'bold',
                                }}>
                            Emergency</Text>
                        </Title>
                        <Title style={{
                            fontSize: 18,
                            color: "#336ab5",
                            fontWeight: 'bold',
                            marginBottom: 16,
                            alignSelf: "center",
                        }}>
                            info@valortechnicalcleaning.com
                        </Title>
                    </Card.Content>
                    
                    <Card.Content
                        style={{
                            width: "100%",
                            paddingVertical: 10,
                            backgroundColor: "#336ab5",
                            alignSelf: "center",
                        }}
                    >
                        <Title style={{
                            fontSize: 28,
                            color: "#fff",
                            alignSelf: "center",
                        }}>
                            Crime Scene Cleanup Experts You Can Trust
                        </Title>
                    </Card.Content>
                    <Card.Cover style={{
                            width: "100%",
                            backgroundColor: "transparent", 
                        }}
                        source={require('./../../assets/images/stressed-women.png')} />
                    <Card.Content
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}
                    >
                        <Card.Cover style={{
                            width: "50%",
                            backgroundColor: "transparent",
                        }}
                        source={require('./../../assets/images/forensic-man.png')} />
                        <View style={{
                            width: "50%",
                            alignSelf: "center",
                            backgroundColor: "transparent",
                            alignItems: "center",
                        }}>
                            <Text style={styles.textHalf}>24/7/365</Text>
                            <Text style={styles.textHalf}>Emergency Clean Up</Text>
                            
                            <Text style={styles.textHalf}>Homicide, Suicide,</Text>
                            <Text style={styles.textHalf}>Unattended Death,</Text>
                            <Text style={styles.textHalf}>Decomposition,</Text>
                            <Text style={styles.textHalf}>Blood, and</Text>
                            <Text style={styles.textHalf}>Biohazard Cleanup</Text>
                        </View>
                    </Card.Content>
                    <Card.Content
                        style={{
                            width: "100%",
                            paddingVertical: 10,
                            backgroundColor: "#336ab5",
                            alignSelf: "center",
                        }}
                    >
                        <Title style={{
                            fontSize: 28,
                            color: "#fff",
                            alignSelf: "center",
                            marginBottom: 20
                        }}>
                            Our Crime Scene Services
                        </Title>
                        <View 
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text style={styles.halfWidth}>After Death Clean Up</Text>
                            <Text style={styles.halfWidth}>Decomposition</Text>
                            <Text style={styles.halfWidth}>Biohazard Remediation</Text>
                            <Text style={styles.halfWidth}>Unattended Death</Text>
                            <Text style={styles.halfWidth}>Crime Scene Clean Up</Text>
                            <Text style={styles.halfWidth}>Hoarding Clean Up</Text>
                            <Text style={styles.halfWidth}>Homicide Clean Up</Text>
                            <Text style={styles.halfWidth}>Reconstruction Services</Text>
                            <Text style={styles.halfWidth}>Suicide Clean Up</Text>
                            <Text style={styles.halfWidth}>Board-ups</Text>
                        </View>
                    </Card.Content>
                    <Card.Content>
                    <WebView
                        style={{ height: 200, width: "100%" }}
                        source={{
                            html: `
                                <!DOCTYPE html>
                                <html>
                                    <head>
                                        <style>
                                            iframe{
                                                width: 100%;
                                                height: 500px;
                                            }  
                                        </style>
                                    </head>
                                    <body>
                                    <div><iframe src="https://www.youtube.com/embed/oWX3m2VehvQ"></iframe></div>
                                    </body>
                                </html>
                            `,
                        }}
                        />
                    </Card.Content>
                    <View
                        style={{
                            alignSelf: "center",
                        }} 
                    >
                        <Text style={styles.text}>                
                            <MaterialCommunityIcons name="book" size={20} />
                            Add Me To Contacts
                        </Text>
                        <Text style={styles.text}>                
                            <MaterialCommunityIcons name="phone" size={20} />
                            Emergency - Call Us Now
                        </Text>
                        <Text style={styles.text}>                
                            <MaterialCommunityIcons name="image" size={20} />
Visit Our Website</Text>
                        <Text style={styles.text}>                
                            <MaterialCommunityIcons name="phone" size={20} />
Valor Voice Podcast</Text>
                        <Text style={styles.text}>                
                            <MaterialCommunityIcons name="information" size={20} />
Tips On Sharing My Card</Text>
                    </View>
                </Card>
            </ScrollView>
        </>
    );
}


const styles = StyleSheet.create({
    textHalf: {
        color: "#336ab5",
        fontSize: 14,
        fontWeight: "bold"
    },
    halfWidth: {
        width: "50%",
        color: "#fff",
        fontSize: 14,
    },
    text: {
        color: "#336ab5",
        fontSize: 20,
        fontWeight: "bold"
    }
})